import { IonicPage, App, ViewController, NavController, Nav } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Http } from '../../http-api';
import { LinkWalletPage } from '../linkWallet/linkWallet';
import { LogPage } from '../login/login';

@IonicPage({
  name:'receive_erp'
})

@Component({
  selector: 'page-receiveErp',
  templateUrl: 'receiveErp.html'
})

export class ReceivePage
{
  //@ViewChild(Nav) nav: Nav;
  //rootPage: any;

  public myAngularxQrCode: string = null;
  message: any;
  constructor(public app: App, public navCtrl: NavController, public http: Http, public viewCtrl: ViewController)
  {
    this.http.get("/user/info").subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        console.log(jsonResp);
        this.myAngularxQrCode = jsonResp.walletAddress;
        console.log("Code: "+this.myAngularxQrCode);
        if(this.myAngularxQrCode != null)
        {
          this.message = "Key: "+this.myAngularxQrCode;
        }
        else
        {
          this.viewCtrl.dismiss();
          this.app.getRootNav().push('link_wallet');
          //this.nav.push(LinkWalletPage);
          alert("Please link a wallet before trying to receive ERP-Coins.");
        }
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }

}
