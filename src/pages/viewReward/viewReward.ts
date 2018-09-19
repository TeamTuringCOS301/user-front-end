import { IonicPage, ViewController, NavParams, App, ToastController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { buyReward, hasWallet } from '../../wallet-functions';
import { LinkWalletPage } from '../linkWallet/linkWallet';
import { addCloseListener, presentToast } from '../../app-functions';

@IonicPage({
  name:'view_reward'
})

@Component({
  selector: 'page-viewReward',
  templateUrl: 'viewReward.html'
})

export class ViewReward{
  reward:any;
  constructor(public toastCtrl: ToastController, public app: App, public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
    addCloseListener(this.viewCtrl, window);
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
        if(jsonArr.coinBalance >= this.reward.coinValue)
        {
          if(walletAddress == null)
          {
            this.http.get('/reward/buy/'+this.reward.id).subscribe
            (
              (data) =>
              {
                presentToast(this.toastCtrl, "Purchase successful!");
                this.closeModal();
              },
              (error) =>
              {
                console.log(error);
              }
            );
          }
          else if(hasWallet() == false)
          {
            alert("Could not connect to wallet plugin. Please check that it is installed and working.");
          }
          else
          {
            console.log(this.reward);
            console.log(this.http);
            buyReward(this.reward, this.http);
          }
        }
        else
        {
          alert("You don't have enough balance to buy this reward");
        }
      });
  }
}
