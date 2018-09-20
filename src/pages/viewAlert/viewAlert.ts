import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { addCloseListener, closeModal } from '../../app-functions';

@IonicPage({
  name:'view_alert'
})

@Component({
  selector: 'page-viewAlert',
  templateUrl: 'viewAlert.html'
})

export class ViewAlert{
  alert:any;
  constructor(public events: Events, public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
    addCloseListener(this.viewCtrl, window, this.events);
    this.alert = navParams.get('alert');
  }

  public ionViewDidLoad()
  {
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
