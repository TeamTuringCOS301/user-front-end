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
  extWallet: any;
  message = "";
  noMessage = "";
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public http: Http) {
    this.linkWallet = new FormGroup({walletAddress: new FormControl("", Validators.required)});
    this.walletAddress = "";
  }

  public presentToast(text)
  {
    let toast = this.toastCtrl.create(
    {
      message: text,
      duration: 1500,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.present();
  }

  ionViewDidLoad(){
   /*hasWallet().then((val) =>
    {
     console.log("Val is" +val);
     if(val == true)
     {
       //alert("You have a wallet");
       getAddress().then((val) => {this.walletAddress = val;})
       //alert(getAddress());
       //this.walletAddress = getAddress();
     }
     else
     {
      // alert("You have no wallet");
     }
    },
    (err) =>
    {
      alert(err);
    });*/
    this.http.get("/user/info").subscribe(
    (data) =>
    {
      var jsonResp = data.text();
      var jsonArr = JSON.parse(jsonResp);
      this.walletAddress = jsonArr.walletAddress;
      if(hasWallet())
      {
        this.extWallet = getAddress();
        console.log(this.extWallet);
        console.log(this.walletAddress);
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
        alert(data.text());
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

}
