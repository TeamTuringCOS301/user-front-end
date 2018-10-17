import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { hasWallet, getAddress } from '../../wallet-functions';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { checkLoggedIn, handleError, presentToast, Loading } from '../../app-functions';

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
  constructor(public loading: Loading, public storage:Storage, public toastCtrl: ToastController, public navCtrl: NavController, public http: Http) {
    this.linkWallet = new FormGroup({walletAddress: new FormControl("", Validators.required)});
    this.walletAddress = "";
  }

  ionViewDidLoad(){
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    var refresh = false;
    do
    {
      this.http.get("/user/info").subscribe(
      (data) =>
      {
        refresh = false;
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
          //this.noMessage = "No external wallet found, please install one.";
          this.noMessage = "Please come visit our stand for assistance.";
        }
      },
      (err) =>
      {
        if(handleError(this.storage, this.navCtrl, err, this.toastCtrl) == "")
        {
          refresh = true;
        }
      });
    }while(refresh);
    this.loading.doneLoading();
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
    var refresh = false;
    this.loading.showLoadingScreen();
    do
    {
      this.http.post("/user/address", jsonArr).subscribe(
        (data) =>
        {
          refresh = true;
          this.navCtrl.push('account');
          presentToast(this.toastCtrl, "Successfully linked");
        },
        (error) =>
        {
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "")
          {
            refresh = false;
          }
        }
      );
    }while(refresh);
    this.loading.doneLoading();
  }

}
