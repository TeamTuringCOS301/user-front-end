import { IonicPage, ViewController, NavParams, App, ToastController, NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
import { buyReward, hasWallet } from '../../wallet-functions';
import { LinkWalletPage } from '../linkWallet/linkWallet';
import { addCloseListener, presentToast, handleError, closeModal } from '../../app-functions';

@IonicPage({
  name:'view_reward'
})

@Component({
  selector: 'page-viewReward',
  templateUrl: 'viewReward.html'
})

export class ViewReward{
  reward:any;
  coinBalance: any;
  walletAddress: any = null;
  status: any = "";
  constructor(public events: Events, public storage: Storage, public navCtrl: NavController, public toastCtrl: ToastController, public app: App, public viewCtrl: ViewController, public navParams: NavParams, public http: Http)
  {
    addCloseListener(this.viewCtrl, window, this.events);
    this.reward = navParams.get('reward');
    //this.reward.image = CONFIG.url +"/reward/image/"+this.reward.id;
    this.http.get("/user/info").subscribe(
      (data) =>
      {
        var jsonResp = data.text();
        var jsonArr = JSON.parse(jsonResp);
        this.walletAddress = jsonArr.walletAddress;
        this.coinBalance = jsonArr.coinBalance;
        this.checkBalance();
      },
      (error) =>
      {
        handleError(this.storage, this.navCtrl, error, this.toastCtrl);
      }
    );
  }

  public closeModal()
  {
    closeModal(this.viewCtrl, this.events);
  }

  public checkBalance()
  {
    if(this.reward.coinValue > this.coinBalance)
    {
      this.status = "Insufficient balance";
    }
  }

  public purchaseReward()
  {
    if(this.walletAddress == null)
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
          handleError(this.storage, this.navCtrl, error, this.toastCtrl);
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
}
