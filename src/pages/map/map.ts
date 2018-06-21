import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendAlert } from '../sendAlert/sendAlert';
import { ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CONFIG } from '../../app-config';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';

declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})


export class MapPage {
  patrol:any;
  isTracking:any;
  lastTimestamp: any;
  interval: any;
  address:any;
  lastReceivedPointTime: any;
  userMapLocations: any;
  area: any;
  currentLocation: any;
  myVar: any;
  marker:any;
  url: any;
  naviID: any;
  constructor(public locationTracker: LocationTrackerProvider, public geolocation: Geolocation, public toastCtrl: ToastController, public http: Http, public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.area;
    this.lastTimestamp = new Date().getTime();
    this.lastReceivedPointTime = 0;
    this.url = CONFIG.url;
    this.isTracking = false;
    this.patrol = {};
  }

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
    this.area = CONFIG.area;
    this.userMapLocations;
    this.patrol = {};
    this.patrol.coins = 0;
    var polygonPoints = [
      {lat: 25.774, lng: -80.190},
      {lat: 18.466, lng: -66.118},
      {lat: 32.321, lng: -64.757},
      {lat: 25.774, lng: -80.190}
    ];
    this.LoadMap(this.area);
    this.watchPosition();
  }

  public presentToast(text)
  {
    let toast = this.toastCtrl.create(
    {
      message: text,
      duration: 1500,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.present();
  }

  /*=====================================
  watchPosition()
  - Uses geolocation watchPosition(), updates location when location changes
  - Calls getAndDisplayPosition()
  - Alerts the user if geolocation access was denied, or if not supported
  =====================================*/
  public watchPosition() {
    //this.locationTracker.startTracking();
    if (this.geolocation)
    {
      this.isTracking = true;
      //let options = {enableHighAccuracy:true};
      this.naviID = setInterval(() =>
      {
        //var position:any = {};
        //position.latitude = this.locationTracker.lat;
        //position.longitude = this.locationTracker.lng;
        navigator.geolocation.getCurrentPosition((position) =>
        {
          this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          this.getAndDisplayMyPosition(position.coords);
        },
        error =>
        {
          alert("Error: "+error.code+" "+error.message);
        });
      }, 10000);

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  public getAndDisplayOtherPosition()
  {
    var jsonParam: any = {};
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = this.url+"/point/list/"+this.area+"/"+this.lastReceivedPointTime+"/";
    console.log("Getting other locations");
    this.http.get(addr).subscribe(
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        var pointsArr = jsonResp.points;
        this.lastReceivedPointTime = jsonResp.latest;
        pointsArr.forEach(
          (point) =>
          {
            var locMarker = new google.maps.Marker({
              position: point,
              map: this.map,
              title: 'Patrolled Point',
              icon: {
                url: "assets/imgs/people.png",
                scaledSize: new google.maps.Size(16, 16)
              }
            });
          }
        )
      },
      (error) => //Error
      {
        console.log(error);
      }
    );
  }

  /*=====================================
  getAndDisplayPosition()
  - Gets position from device's geolocation and displays it on the maps
  - Called by the watchPosition() function
  - Sends position to sendLocation() to send to server
  =====================================*/
  public getAndDisplayMyPosition(position)
  {
    let location = new google.maps.LatLng(position.latitude, position.longitude);
    this.map.panTo(location);
    this.map.setZoom(80);
    if(this.marker)
    {
      this.marker.setMap(null);
    }
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Me',
      icon: {
        url: "assets/imgs/people.png",
        scaledSize: new google.maps.Size(32, 32)
      }
    });
    this.sendLocation(location);
  }

  public sendLocation(location)
  {
    var jsonArr: any = {};
    jsonArr = location;
    var param = jsonArr;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = this.url+"/point/add/"+this.area+"/"; // ID is area ID from database
    console.log("Sending location now");
    this.http.post(addr, param, options).subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.coin == true)
        {
          this.presentToast("Yay, you got a coin!");
        }
        else
        {
          //alert("Awww, you did not get a coin!");
        }
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  public alerts()
  {
    var jsonArr: any = {};
    jsonArr.location = "";
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = this.url+"/area/info/"; // ID is area ID from database
    this.http.post(addr, param, options).subscribe
    (
      (data) => //Success
      {
      var jsonResp = JSON.parse(data.text());
      if(jsonResp.success)
      {
        var iconPost = "Alert.png";
        var iconPre = "assets/imgs/";
        alertArr = [];
        alertArr = jsonResp.alerts;
        alertArr.forEach((alert) =>
        {
          console.log("Alert: "+alert.secerity);
          var iconSelection = iconPre + alert.severity+ iconPost;
          var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">'+alert.title+'</h1>'+
          '<div id="bodyContent">'+
          '<p>'+alert.description+'</p>'+
          '</div>'+
          '</div>';
          var infowindow = new google.maps.InfoWindow(
            {
              content: contentString
            });
            var marker = new google.maps.Marker(
              {
                position: alert.location,
                map: this.map,
                title: alert.title,
                icon:
                {
                  url: iconSelection,
                  scaledSize: new google.maps.Size(16, 16) // pixels
                }
              });
              marker.addListener('click', function()
              {
                infowindow.open(this.map, marker);
              });
            });
          }
          else
          {
            alert("Invalid username/password combination");
          }
        },
        (error) =>//Failure
        {
        var errorString = "Error: " +error;
        alert(errorString);
      }
    )
    var alertArr: any = [];
    var testalert: any = {};
    var iconPost = "Alert.png";
    var iconPre = "assets/imgs/";
    testalert.title = "Test Alert";
    testalert.description = "This is a sample description for ERP-Coin App Alerts.";
    testalert.severity = "red";
    testalert.location = {lat: 24.886, lng: -70.268};
    alertArr.push(testalert);
    testalert = {};
    testalert.title = "Test Alert";
    testalert.description = "This is a sample description for ERP-Coin App Alerts.";
    testalert.severity = "orange";
    testalert.location = {lat: 23.886, lng: -70.268};
    alertArr.push(testalert);
    testalert = {};
    testalert.title = "Test Alert";
    testalert.description = "This is a sample description for ERP-Coin App Alerts.";
    testalert.severity = "blue";
    testalert.location = {lat: 25.886, lng: -70.268};
    alertArr.push(testalert);
    alertArr.forEach((alert) =>{
      console.log("Alert: "+alert.severity);
      var iconSelection = iconPre + alert.severity+ iconPost;
      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">'+alert.title+'</h1>'+
      '<div id="bodyContent">'+
      '<p>'+alert.description+'</p>'+
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var marker = new google.maps.Marker({
        position: alert.location,
        map: this.map,
        title: 'Test Alert',
        icon: {
          url: iconSelection,
          scaledSize: new google.maps.Size(16, 16) // pixels
        }
      });
      marker.addListener('click', function() {
        infowindow.open(this.map, marker);
      });
    });
  }


  LoadMap(areaName)
  {
    var jsonArr: any = {};
    jsonArr.id = areaName;
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = this.url+"/area/info/"+areaName;
    this.http.get(addr).subscribe
    (
      (data) => //Success
      {
        //alert("Success: " +data.text());
        var jsonResp = JSON.parse(data.text());
        //alert(jsonResp);
        if(jsonResp)
        {
          var mapDetails:any;
          mapDetails = JSON.parse(data.text());
          var test:any = [];
          test = [{lat: -25.75565, lng: 28.23938},	//to be replaced with server request
          {lat: -25.75392, lng: 28.23217}];
          //alert("Middle: "+mapDetails.middle);
          //alert("Middle: "+JSON.parse(mapDetails.middle));
          this.map = new google.maps.Map(document.getElementById('map'),
          {
            zoom: 5,
            center: JSON.parse(mapDetails.middle),
            mapTypeId: 'terrain'
          });
          // Construct the polygon.
          var mapObj = new google.maps.Polygon(
          {
            paths: JSON.parse(mapDetails.border),
            strokeColor: '#0000FF',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#0000ff',
            fillOpacity: 0.2,
          });
          this.map.zoom = 12;
          mapObj.setMap(this.map);
          this.map.zoomo = 12;
        }
      },
      (error) =>//Failure
      {
        alert("Error" +error);
      }
    );
  }

  navPop()
  {
    clearInterval(this.naviID);
    this.locationTracker.stopTracking();
    this.navCtrl.pop();
  }

  public sendAlert()
  {
    var jsonD: any = {};
    jsonD.location = this.currentLocation;
    var modalPage = this.modalCtrl.create(SendAlert); modalPage.present();
  }

}
