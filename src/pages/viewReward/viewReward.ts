import { ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
@Component({
  selector: 'page-viewReward',
  templateUrl: 'viewReward.html'
})

export class ViewReward{
  reward:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
    this.reward = navParams.get('reward');
  }

  public ionViewDidLoad()
  {
    this.reward.image = CONFIG.url +"/reward/image/"+this.reward.id;
  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }
}
