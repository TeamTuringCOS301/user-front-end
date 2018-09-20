import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { hasWallet, getAddress } from '../../wallet-functions';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { checkLoggedIn } from '../../app-functions';

@IonicPage({
  name:'link_wallet',
  defaultHistory: ['account']
})

@Component({
  selector: 'page-linkWallet',
  templateUrl: 'linkWallet.html'
})
export class LinkWalletPage {
  linkWallet: any;
  url: any;
  walletAddress: any;
  extWallet: any;
  message = "";
  noMessage = "";
  constructor(public storage:Storage, public toastCtrl: ToastController, public navCtrl: NavController, public http: Http) {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.linkWallet = new FormGroup({walletAddress: new FormControl("", Validators.required)});
    this.walletAddress = "";
  }

  ionViewDidLoad(){
    this.http.get("/user/info").subscribe(
    (data) =>
    {
      var jsonResp = data.text();
      var jsonArr = JSON.parse(jsonResp);
      this.walletAddress = jsonArr.walletAddress;
      if(hasWallet())
      {
        this.extWallet = getAddress();
        if(this.extWallet != this.walletAddress)
        {
          this.message = "Your stored address is different from the one reported by your wallet. Click to load address from wallet.";
        }
      }
      else
      {
        this.noMessage = "No external wallet found, please install one.";
      }
    });
  }

  loadAddr()
  {
    if(hasWallet())
    {
      this.walletAddress = this.extWallet;
      this.message = "";
    }
  }

  wallet(val){
    var jsonArr: any = {};
    jsonArr.walletAddress = val.walletAddress;
    this.http.post("/user/address", jsonArr).subscribe(
      (data) =>
      {
        console.log(data.text());
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

}
