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
  constructor(public http: Http, public storage: Storage, public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
    this.storage.get('area').then(val=>{
      let area = val;
      //alert("Received area is: " +area);
      //var polygonPoints:any = [];
      //polygonPoints = this.getPolygonPoints(area);
      //this.loadMap(polygonPoints);
      var polygonPoints = [
        {lat: 25.774, lng: -80.190},
        {lat: 18.466, lng: -66.118},
        {lat: 32.321, lng: -64.757},
        {lat: 25.774, lng: -80.190}
      ];
      this.LoadMap(polygonPoints);
      this.alerts();
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
    var addr = "";
    /*this.http.post(addr, param, options).subscribe
    (
      (data) => //Success
      {
        //alert("Success: " +data.text());
        var jsonResp = JSON.parse(data.text());
        //alert(jsonResp);
        if(jsonResp.success)
        {
          this.presentToast();
          this.navCtrl.push(AccountPage);
        }
        else
        {
          alert("Invalid username/password combination");
        }
      },
      (error) =>//Failure
      {
        alert("Error: Could not connect to the server. Please ensure that this device has internet access.");
      },
      (complete) =>
      {
        //Completion code
      }
    );*/
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

  public getPolygonPoints(areaName)
  {
    var jsonArr: any = {};
    jsonArr.location = areaName;
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = "";
    /*this.http.post(addr, param, options).subscribe
    (
      (data) => //Success
      {
        //alert("Success: " +data.text());
        var jsonResp = JSON.parse(data.text());
        //alert(jsonResp);
        if(jsonResp.success)
        {
          this.presentToast();
          this.navCtrl.push(AccountPage);
        }
        else
        {
          alert("Invalid username/password combination");
        }
      },
      (error) =>//Failure
      {
        alert("Error: Could not connect to the server. Please ensure that this device has internet access.");
      },
      (complete) =>
      {
        //Completion code
      }
    );*/
  }

  /*loadMap(polygonPoints){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }*/

  LoadMap(polygonPoints) {
        this.Gmap = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: {lat: 24.886, lng: -70.268},
          mapTypeId: 'terrain'
        });
        // Construct the polygon.
        var bermudaTriangle = new google.maps.Polygon({
          paths: polygonPoints,
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35
        });
        bermudaTriangle.setMap(this.Gmap);
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
