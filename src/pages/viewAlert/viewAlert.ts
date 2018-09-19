import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';

@IonicPage({
  name:'view_alert'
})

@Component({
  selector: 'page-viewAlert',
  templateUrl: 'viewAlert.html'
})

export class ViewAlert{
  alert:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
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
    this.viewCtrl.dismiss();
  }
}
