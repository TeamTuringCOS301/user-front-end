import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { hasWallet, getAddress } from '../../wallet-functions';
import { Http } from '../../http-api';

@Component({
  selector: 'page-linkWallet',
  templateUrl: 'linkWallet.html'
})
export class LinkWalletPage {
  linkWallet: any;
  url: any;
  walletAddress: any;
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public http: Http) {
    this.linkWallet = new FormGroup({walletAddress: new FormControl("", Validators.required)});
    this.walletAddress = "";
  }

  ionViewDidLoad(){
    if(hasWallet())
    {
      alert("You have a wallet");
      alert(getAddress());
      this.walletAddress = getAddress();
    }
    else
    {
      alert("You have no wallet");
    }
  }

  wallet(){

  }

}
