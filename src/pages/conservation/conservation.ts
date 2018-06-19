import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Storage } from '@ionic/storage';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CONFIG } from '../../app-config';


@Component({
  selector: 'page-conservation',
  templateUrl: 'conservation.html'

})
export class ConservationPage {
  area:any;
  areas:any;
  url:any;
  constructor(public http: Http, public navCtrl: NavController, public storage: Storage) {
    this.url = CONFIG.url;
    this.areas = [];
    this.area = {};
    var jsonArr: any = {};
    jsonArr.location = "";
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    var addr = this.url+"/area/list";
    //alert(addr);
    this.http.get(addr).subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        //alert(data.text());
        this.areas = jsonResp.areas;
      });
}
  picked(area)
  {
    //this.storage.set('area', area);
    //alert(area);
    this.navCtrl.push(MapPage);
  }

  ionViewDidLoad()
  {

  }

  navPop()
  {
    this.navCtrl.pop();
  }

}
