import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavParams, IonicPage, NavController, ToastController } from 'ionic-angular';
import { SendAlert } from '../sendAlert/sendAlert';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { Events } from 'ionic-angular';
import { ViewAlert } from '../viewAlert/viewAlert';
import { checkLoggedIn, presentToast, openModal } from '../../app-functions';

declare var google;

@IonicPage({
  name:'map'
})

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})


export class MapPage {
  map: any;
  patrol: any;
  isTracking: any;
  address: any;
  area: any;
  currentLocation: any;
  pointsArr: any;
  myVar: any;
  alertsArr: any;
  marker: any;
  url: any;
  naviID: any;
  trackingInterval: any;
  constructor(public navParams: NavParams, public toastCtrl: ToastController, public events: Events, public http: Http, public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.area;
    this.alertsArr = [];
    this.naviID;
    this.pointsArr = [];
    this.isTracking = false;
    this.patrol = {};
    window.addEventListener('popstate', () =>
    {
      clearInterval(this.trackingInterval);
    });
  }

  ionViewDidEnter(){
      this.area = this.navParams.get('area');
      this.patrol = {};
      this.patrol.coins = 0;
      this.LoadMap(this.area);
      //this.trackMe();
  }

  public getOtherUserPoints(since)
  {
    this.http.get("/point/list/"+this.area+"/"+since).subscribe(
        (data) => //success
        {
          var jsonResp = JSON.parse(data.text());
          //console.log("Returned: "+data.text());
          var points = jsonResp.points;
          this.pointsArr.forEach(
          (point) =>
          {
            point.setMap(null);
          });
        this.pointsArr = [];
        points.forEach(
          (point) => {
            var pointLocation = new google.maps.LatLng(point.lat, point.lng);
            var marker = new google.maps.Marker({
              position: pointLocation,
              map: this.map,
              title: 'Other User',
              zIndex: 0,
              icon: {
                url: "assets/imgs/pointIcon.png",
                scaledSize: new google.maps.Size(16, 16) // pixels
              }
            });
            this.pointsArr.push(marker);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public trackMe() {
    console.log("Entered trackMe()");
    if (navigator.geolocation)
    {
      this.isTracking = true;
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("Got current position");
        this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        this.showPosition(position);
        this.map.panTo(this.currentLocation);
        this.map.setZoom(46);//16
        //this.alerts();
      },
      (error) =>{
        console.log(error.message);
      }, {timeout:10000});
      this.trackingInterval = setInterval(() =>
      {
        navigator.geolocation.getCurrentPosition(
        (position) =>
        {
          this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.showPosition(position);
        });
      }, CONFIG.interval);
    }
    else
    {
      alert("Geolocation is not supported by this browser.");
    }
  }

  public showPosition(position) {
    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    if (this.marker) {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      zIndex: 3,
      title: 'You',
      icon: {
        url: "assets/imgs/userIcon.png",
        scaledSize: new google.maps.Size(48, 48) // pixels
      }
    });
    this.sendLocation(location);
    this.alerts();
  }

  public sendLocation(location) {
    var jsonArr: any = {};
    jsonArr = location;
    this.http.post("/point/add/" + this.area, jsonArr).subscribe
      (
      (data) => {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.coin)
        {
          presentToast(this.toastCtrl, "Yay, you got a coin!");
          this.patrol.coins ++;
        }
        else
        {

        }
      },
      (error) => {
        if(error.status == 418)
        {
          presentToast(this.toastCtrl, "You are not inside the specified conservation area");
        }
      }
      );
  }

  public alerts() {
    var jsonArr: any = {};
    jsonArr.location = "";
    var since = 0; //CHANGE THIS
    this.http.get("/alert/broadcasts/"+this.area+"/"+since).subscribe
    (
      (data) => //Success
      {
      var jsonResp = JSON.parse(data.text());
        var alertArr = [];
        alertArr = jsonResp.alerts;
        this.alertsArr.forEach((alert) => {alert.setMap(null);});
        alertArr.forEach((alert) =>{
          var testLoc = new google.maps.LatLng(alert.location.lat, alert.location.lng);
          var iconPost = "Alert.png";
          var iconPre = "assets/imgs/"
          var iconSelection = iconPre + alert.severity+ iconPost;
          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+alert.title+'</h1>'+
          '<div id="bodyContent">'+
          '<p>'+alert.description+'</p>'+
          '</div>'+
          '</div>';
          this.alertsArr = [];
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          var marker = new google.maps.Marker({
            position: testLoc,
            map: this.map,
            title: alert.title,
            zIndex: 5,
            icon: {
              url: iconSelection,
              scaledSize: new google.maps.Size(32, 32), // pixels
            }
          });
          alert.severity = CONFIG.severity[alert.severity];

          marker.addListener('click', () => {
            var modalPage = this.modalCtrl.create('view_alert', {alert: alert, area: this.area});
            openModal(modalPage, window);
          });
          this.alertsArr.push(marker);
        });
        this.getOtherUserPoints(0);
    },
    (error) =>//Failure
    {
      console.log("Error"+error);
    }
);
}


LoadMap(areaName) {
  this.http.get("/area/info/"+areaName).subscribe
  (
    (data) => //Success
    {
    var jsonResp = JSON.parse(data.text());
    if(jsonResp)
    {
      var mapDetails:any;
      this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: jsonResp.middle,
      mapTypeId: 'terrain'
    });
    var mapObj = new google.maps.Polygon
    ({
      paths: jsonResp.border,
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000ff',
      fillOpacity: 0.2,
    });
    mapObj.setMap(this.map);
    this.trackMe();
    }
  },
  (error) =>//Failure
  {
    console.log("Error: " +error);
  });
}

public navPop()
{
  clearInterval(this.trackingInterval);
  this.navCtrl.pop();
}

ionViewDidLeave()
{
  clearInterval(this.trackingInterval);
}

public sendAlert()
{
  var modalPage = this.modalCtrl.create('send_alert', {location: this.currentLocation});
  openModal(modalPage, window);
}

}
