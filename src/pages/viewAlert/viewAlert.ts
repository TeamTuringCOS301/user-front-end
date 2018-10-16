import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';
import { Component } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { addCloseListener, closeModal, Loading } from '../../app-functions';

@IonicPage({
  name:'view_alert'
})

@Component({
  selector: 'page-viewAlert',
  templateUrl: 'viewAlert.html'
})

export class ViewAlert{
  alert:any;
  constructor(public loading: Loading, public events: Events, public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
    addCloseListener(this.viewCtrl, window, this.events);
    this.alert = navParams.get('alert');
  }

  public ionViewDidLoad()
  {
    this.loading.doneLoading();
    if(this.alert.hasImage)
    {
      this.alert.image = CONFIG.url +"/alert/image/"+this.alert.id;
    }
  }

  public closeModal()
  {
    closeModal(this.viewCtrl, this.events);
  }
}
