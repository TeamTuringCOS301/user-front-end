import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';
import { MapPage } from '../map/map';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';

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
  constructor(public events: Events, public http: Http, public navCtrl: NavController, public storage: Storage) {
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
    CONFIG.area = area;
    this.navCtrl.push('map');
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
