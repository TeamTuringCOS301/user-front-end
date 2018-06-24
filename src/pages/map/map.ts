import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SendAlert } from '../sendAlert/sendAlert';
import { ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { Events } from 'ionic-angular';
import { ViewAlert } from '../viewAlert/viewAlert';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})


export class MapPage {
  map: any;
  patrol:any;
  isTracking:any;
  address:any;
  area: any;
  currentLocation: any;
  pointsArr: any;
  myVar: any;
  alertsArr: any;
  marker:any;
  url: any;
  naviID: any;
  constructor(public toastCtrl: ToastController, public events: Events, public http: Http, public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.area;
    this.alertsArr = [];
    this.naviID;
    this.pointsArr = [];
    this.isTracking = false;
    this.patrol = {};
  }

  public presentToast(message)
  {
    let toast = this.toastCtrl.create(
    {
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

  ionViewDidLoad(){
      this.area = CONFIG.area;
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
            (point) =>
            {
              var pointLocation = new google.maps.LatLng(point.lat, point.lng);
              var marker = new google.maps.Marker({
                position: pointLocation,
                map: this.map,
                title: 'Other User',
                zIndex:0,
                icon: {
                  url: "assets/imgs/userPoint.png",
                  scaledSize: new google.maps.Size(16, 16) // pixels
                }
              });
              this.pointsArr.push(marker);
            }
          );
        },
        (error) =>
        {
          alert(error);
        }
    );
  }

  public trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        CONFIG.currentLocation = this.currentLocation;
        this.showPosition(position);
        this.map.panTo(this.currentLocation);
        this.map.setZoom(16);
        //this.alerts();
      });
      this.naviID = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        CONFIG.currentLocation = this.currentLocation;
        this.showPosition(position);
        //this.alerts();
        //this.getOtherUserPoints(0);
      });
    }, CONFIG.interval);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  public showPosition(position) {
    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        if(this.marker)
    {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      zIndex: 3,
      title: 'Got you!',
      icon: {
        url: "assets/imgs/people.png",
        scaledSize: new google.maps.Size(48, 48) // pixels
      }
    });
    this.sendLocation(location);
    this.alerts();
  }

  public sendLocation(location)
  {
    var jsonArr: any = {};
    jsonArr = location;
    this.http.post("/point/add/"+this.area, jsonArr).subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.coin)
        {
          this.presentToast("Yay, you got a coin!");
          this.patrol.coins ++;
        }
        else
        {
        }
      },
      (error) =>
      {
        alert("Error: "+error);
      }
    );
  }

  public alerts()
  {
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
          //console.log("Alert: ");
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
          //console.log("Image: "+iconSelection);
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
          //console.log("Marker: "+marker)
          //this.alert = navParams.get('alert');
          alert.severity = CONFIG.severity[alert.severity];
          if(alert.image == 0)
          {
              alert("Image is blank");
          }
          else
          {
            var point = alert.image.indexOf("base64") + 6;
            var pointTwo = alert.image.indexOf("base64");
            var pointOne = alert.image.indexOf("image/") + 5;
            var imageType = alert.image.substring(pointOne, pointTwo);
            var newDataPre = "data:image";
            var newDataPost = ";base64,";
            var finalNewData = newDataPre + imageType + newDataPost;
            var oldString = alert.image.substring(0, point);
            alert.image.replace(oldString , finalNewData);
            finalNewData = finalNewData + alert.image.substr(point);
            alert.image = finalNewData;
          }
          marker.addListener('click', () => {
            var modalPage = this.modalCtrl.create(ViewAlert, {alert: alert}); modalPage.present();
          });
          this.alertsArr.push(marker);
        });
        this.getOtherUserPoints(0);
    },
    (error) =>//Failure
    {
    alert("Error"+error);
    }
);
}


LoadMap(areaName) {
  this.http.get("/area/info/"+areaName).subscribe
  (
    (data) => //Success
    {
    console.log(data.text());
    var jsonResp = JSON.parse(data.text());
    console.log(jsonResp.middle);
    if(jsonResp)
    {
      var mapDetails:any;
      this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: jsonResp.middle,
      mapTypeId: 'terrain'
    });
    // Construct the polygon.
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
    alert("Error: " +error);
  });
}

public navPop()
{
  clearInterval(this.naviID);
  this.navCtrl.pop();
}

public sendAlert()
{
  var modalPage = this.modalCtrl.create(SendAlert, {location: this.currentLocation}); modalPage.present();
}

}
