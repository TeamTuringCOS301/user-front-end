import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendAlert } from '../sendAlert/sendAlert';
import { ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';

declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})


export class MapPage {
  Gmap: any;
  patrol:any;
  constructor(public http: Http, public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.patrol = {};
  }

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
    this.storage.get('area').then(val=>{
      let area = val;
      alert("Received area is: " +area);
      while(area == "null")
      {
        this.storage.get('area').then(val=>{this.area = val;});
        alert("Area is: "+this.area);
      }
      alert("New area is: "+area);
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
      this.LoadMap(area);
      //this.alerts();
    });
  }

  public alerts()
  {
    var jsonArr: any = {};
    jsonArr.location = "";
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = "http://192.168.43.19/area/info/"; // ID is area ID from database
    this.http.post(addr, param, options).subscribe
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
            map: this.Gmap,
            title: alert.title,
            icon: {
              url: iconSelection,
              scaledSize: new google.maps.Size(16, 16) // pixels
            }
          });
          marker.addListener('click', function() {
            infowindow.open(this.Gmap, marker);
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
  },
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
    map: this.Gmap,
    title: 'Test Alert',
    icon: {
      url: iconSelection,
      scaledSize: new google.maps.Size(16, 16) // pixels
    }
  });
  marker.addListener('click', function() {
    infowindow.open(this.Gmap, marker);
  });
});
}


LoadMap(areaName) {
  var jsonArr: any = {};
  jsonArr.id = areaName;
  var param = JSON.stringify(jsonArr);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  let options = new RequestOptions({headers: headers});
  var addr = "http://192.168.43.19:8080/area/info/"+areaName;
  this.http.get(addr).subscribe
  (
    (data) => //Success
    {
    alert("Success: " +data.text());
    var jsonResp = JSON.parse(data.text());
    //alert(jsonResp);
    if(jsonResp)
    {
      var mapDetails:any;
      mapDetails = JSON.parse(data.text());
      var test:any = [];
      test = [{lat: -25.75565, lng: 28.23938},	//to be replaced with server request
			{lat: -25.75392, lng: 28.23217}];
      alert("Middle: "+mapDetails.middle);
      alert("Middle: "+JSON.parse(mapDetails.middle));
      this.Gmap = new google.maps.Map(document.getElementById('map'), {
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
      fillOpacity: 0.0
    });
    mapObj.setMap(this.Gmap);

    /*google.maps.Polygon.prototype.getBounds = function() {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;
      for (var i = 0; i < paths.getLength(); i++) {
        path = paths.getAt(i);
        for (var ii = 0; ii < path.getLength(); ii++) {
          bounds.extend(path.getAt(ii));
        }
      }
      return bounds;
    }
    map.fitBounds(area.getBounds());

    var listener = google.maps.event.addListener(this.Gmap, "idle", function() {
      this.Gmap.setZoom(map.getZoom() * 1.03);			//if the polygon does not fit in the screen, adjust this value.
      google.maps.event.removeListener(listener);
    });

    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
      else
      {
        alert("Browser does not support geolocation");
      }*/
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
  var modalPage = this.modalCtrl.create(SendAlert); modalPage.present();
}

}
