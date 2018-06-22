import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendAlert } from '../sendAlert/sendAlert';
import { ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';

declare var google;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})


export class MapPage {
  //map: any;
  patrol:any;
  isTracking:any;
  address:any;
  area: any;
  currentLocation: any;
  myVar: any;
  marker:any;
  url: any;
  constructor(public http: Http, public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.area;
    this.isTracking = false;
    this.patrol = {};
  }

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
    //this.storage.get('area').then(val=>{
      this.area = 1;
      //alert("Received area is: " +area);
      //while(this.area == "null")
      //{
        //this.storage.get('area').then(val=>{this.area = val;});
        //alert("Area is: "+this.area);
      //}
      //alert("New area is: "+area);
      //var polygonPoints:any = [];
      //polygonPoints = this.getPolygonPoints(area);
      //this.loadMap(polygonPoints);
      this.patrol = {};
      this.patrol.coins = 0;
      var polygonPoints = [
        {lat: 25.774, lng: -80.190},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
        {lat: 25.774, lng: -80.190}
      ];
      this.LoadMap(this.area);
      this.trackMe();
      //this.alerts();
  //  });
  }

  public trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);;
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  public showPosition(position) {
    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);
    this.map.setZoom(80);
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!',
      icon: {
        url: "assets/imgs/people.png",
        scaledSize: new google.maps.Size(32, 32) // pixels
      }
    });
    this.sendLocation(location);
  }

  public sendLocation(location)
  {
    var jsonArr: any = {};
    jsonArr.location = location;
    this.http.post("/point/add/"+this.area, jsonArr).subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.coin)
        {
          alert("Yay, you got a coin!");
        }
        else
        {
          alert("Awww, you did not get a coin!");
        }
        if(!this.myVar)
          clearInterval(this.myVar);
        this.myVar = setInterval(this.sendLocation(location), CONFIG.interval);
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
    this.http.post("/area/info", jsonArr).subscribe
    (
      (data) => //Success
      {
      //alert("Success: " +data.text());
      var jsonResp = JSON.parse(data.text());
      //alert(jsonResp);
      if(jsonResp.success)
      {
        var iconPost = "Alert.png";
        var iconPre = "assets/imgs/";
        alertArr = [];
        alertArr = jsonResp.alerts;
        alertArr.forEach((alert) =>{
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

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          var marker = new google.maps.Marker({
            position: alert.location,
            map: this.map,
            title: alert.title,
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
      else
      {
        alert("Invalid username/password combination");
      }
    },
    (error) =>//Failure
    {
    alert("Error: "+error);
    }
);
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


LoadMap(areaName) {
  this.http.get("/area/info/"+areaName).subscribe
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
        this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: JSON.parse(mapDetails.middle),
        mapTypeId: 'terrain'
      });
      // Construct the polygon.
      var mapObj = new google.maps.Polygon({
      paths: JSON.parse(mapDetails.border),
      strokeColor: '#0000FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#0000ff',
      fillOpacity: 0.2,
    });
    this.map.zoom = 12;
    mapObj.setMap(this.map);
    this.map.zoom = 12;
}
},
(error) =>//Failure
{
alert("Error: " +error);
}
);

}

navPop()
{
  this.navCtrl.pop();
}

public sendAlert()
{
  var jsonD: any = {};
  jsonD.location = this.currentLocation;
  var modalPage = this.modalCtrl.create(SendAlert); modalPage.present();
}

}
