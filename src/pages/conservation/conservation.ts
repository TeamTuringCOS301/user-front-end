import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, Events } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { checkLoggedIn } from '../../app-functions';

@IonicPage({
  name:'conservation'
})

@Component({
  selector: 'page-conservation',
  templateUrl: 'conservation.html'

})
export class ConservationPage {
  area:any;
  areas:any;
  allAreas:any;
  url:any;
  constructor(public toastCtrl: ToastController, public events: Events, public http: Http, public navCtrl: NavController, public storage: Storage) {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.areas = [];
    this.area = {};
    this.allAreas = [];
    this.http.get("/area/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.areas = jsonResp.areas;
        this.allAreas = jsonResp.areas;
      });
}
  picked(area)
  {
    this.navCtrl.push('map', {area: area});
  }

  onSearchInput(data)
  {
    this.areas = [];
    var searched = data.target.value;
    if (searched && searched.trim() != '') {
      this.area = this.allAreas.filter((item) => {
        var lowName = item.name.toLowerCase();
        var lowCity = item.city.toLowerCase();
        var lowSearch = searched.toLowerCase();
        var lowProv = item.province.toLowerCase();
        if(lowName.indexOf(lowSearch) >= 0 || lowProv.indexOf(lowSearch) >= 0 || lowCity.indexOf(lowSearch) >= 0)
        {
            this.areas.push(item);
        }
      })
    }
    else
    {
      this.areas = this.allAreas;
    }
  }

  onSearchCancel(data)
  {
    this.areas = this.allAreas;
  }

  ionViewDidLoad()
  {

  }

  navPop()
  {
    this.events.publish("Reload Balance");
    this.navCtrl.pop();
  }

}
