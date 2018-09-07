import { ViewController, NavParams, App } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { buyReward, hasWallet } from '../../wallet-functions';
import { LinkWalletPage } from '../linkWallet/linkWallet';

@Component({
  selector: 'page-viewReward',
  templateUrl: 'viewReward.html'
})

export class ViewReward{
  reward:any;
  constructor(public app: App, public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
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

  public purchaseReward()
  {
    var walletAddress = null;
    this.http.get("/user/info").subscribe(
      (data) =>
      {
        var jsonResp = data.text();
        var jsonArr = JSON.parse(jsonResp);
        walletAddress = jsonArr.walletAddress;
      });

    if(hasWallet() == false || walletAddress == null)
    {
      this.viewCtrl.dismiss();
      this.app.getRootNav().push(LinkWalletPage);
      alert("Please link a wallet before trying to purchase a reward.");
    }
    else
    {
      console.log(this.reward);
      console.log(this.http);
      buyReward(this.reward, this.http);
    }
  }
}
