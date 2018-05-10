import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'page-conservation',
  templateUrl: 'conservation.html'

})
export class ConservationPage {
  constructor(public http: Http, public navCtrl: NavController, public storage: Storage) {
  }

  picked(area)
  {
    this.storage.set('area', area);
    this.navCtrl.push(MapPage);
  }

  ionViewDidLoad()
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
          var array = jsonResp;*/
          /* Expecting:
            item.name
            item.title
            item.province
            item.city*/
          var array = [];
          var jsonObj:any = {};
          jsonObj.name = "reitvlei";
          jsonObj.title = "Rietvlei Nature Reserve";
          jsonObj.province = "Gauteng";
          jsonObj.city = "Pretoria";
          array.push(jsonObj);
          jsonObj = {};
          jsonObj.name = "dinokeng";
          jsonObj.title = "Dinokeng Game Reserve";
          jsonObj.province = "Gauteng";
          jsonObj.city = "Pretoria";
          array.push(jsonObj);
          var content = "";
          array.forEach((item) =>{
            content+= '<ion-row>'+
              '<ion-col col-1></ion-col>'+
              '<ion-col col-10>'+
                '<ion-card (click)="picked('+item.name+')">'+
                  '<ion-card-header>'+
                    item.title+
                  '</ion-card-header>'+
                  '<ion-card-content>'+
                    '<p>Province:' +item.province+ ', City: ' +item.city+ '</p>'+
                  '</ion-card-content>'+
                '</ion-card>'+
              '</ion-col>'+
              '<ion-col col-1></ion-col>'+
            '</ion-row>';
          });
        document.getElementById("conservationList").innerHTML=content;
        /*}
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

  navPop()
  {
    this.navCtrl.pop();
  }

}
