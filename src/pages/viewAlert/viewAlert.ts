import { ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
@Component({
  selector: 'page-viewAlert',
  templateUrl: 'viewAlert.html'
})

export class ViewAlert{
  alert:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams)
  {
    this.alert = navParams.get('alert');
  }


  public closeModal()
  {
    this.viewCtrl.dismiss();
  }
}
