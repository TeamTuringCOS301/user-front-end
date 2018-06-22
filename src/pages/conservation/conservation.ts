import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
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
    this.areas = [];
    this.area = {};
    this.http.get("/area/list").subscribe
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
    CONFIG.area = area;
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
