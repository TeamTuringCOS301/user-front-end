import { ViewController, NavParams, App, ToastController } from 'ionic-angular';
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
  constructor(public toastCtrl: ToastController, public app: App, public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
    this.reward = navParams.get('reward');
  }

  public ionViewDidLoad()
  {
    this.reward.image = CONFIG.url +"/reward/image/"+this.reward.id;
  }

  presentToast(message)
  {
    let toast = this.toastCtrl.create(
    {
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
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
            var jsonArrTwo: any = {};
            this.http.post('/reward/buy/'+this.reward.id, jsonArrTwo).subscribe
            (
              (data) =>
              {
                this.presentToast("Purchase successful!");
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
