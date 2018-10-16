import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { checkLoggedIn, handleError, Loading } from '../../app-functions';

@IonicPage({
  name:'conservation',
  defaultHistory: ['account']
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
  status: any;
  constructor(public loading: Loading, public toastCtrl: ToastController, public events: Events, public http: Http, public navCtrl: NavController, public storage: Storage) {
    this.areas = [];
    this.area = {};
    this.allAreas = [];
}
  picked(area)
  {
    this.loading.showLoadingScreen();
    //
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
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.storage.get('trackingInterval').then((interval) => {clearInterval(interval);});
    var refresh = false;
    do
    {
      this.http.get("/area/list").subscribe
      (
        (data) => //Success
        {
          refresh = false;
          var jsonResp = JSON.parse(data.text());
          this.areas = jsonResp.areas;
          this.allAreas = jsonResp.areas;
        },
        (error) =>
        {
          if(handleError(this.storage, this.navCtrl, error, toastCtrl)=="")
          {
            refresh = true;
          }
        }
      );
    }while(refresh);
    this.loading.doneLoading();
  }

  navPop()
  {
    this.events.publish("Reload Balance");
    this.navCtrl.pop();
  }

}
