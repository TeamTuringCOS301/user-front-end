import { IonicPage, ViewController, Platform, App } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';
import { hasWallet, sendCoin } from '../../wallet-functions';
import { ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { ZXingScannerModule, ZXingScannerComponent } from '@zxing/ngx-scanner';
import { LinkWalletPage } from '../linkWallet/linkWallet';

@IonicPage({
  name:'send_erp'
})

@Component({
  selector: 'page-sendErp',
  templateUrl: 'sendErp.html'
})

export class SendErpPage
{
  @ViewChild('scanner')
  scanner: ZXingScannerComponent;

  selCamera: any;
  otherKey: any = "";
  sendDetails: any;
  scannedCode = null;
  scanning: any = false;
  constructor(public app: App, public platform: Platform, public viewCtrl: ViewController, public http: Http)
  {
    this.sendDetails = new FormGroup({address: new FormControl(), amount: new FormControl(), message: new FormControl()});
  }

  scanSuccess(val)
  {
    console.log(val);
    this.scanner.resetScan();
    //this.scanner.scannerEnabled = false;
    this.scanning = false;
    this.otherKey = val;
    console.log("Other key is: " +this.otherKey);
  }

  cameras(val)
  {
    console.log(val);
    this.selCamera = val[0];
  }

  scan()
  {
    if(this.scanning == true)
    {
      this.scanner.resetScan();
      this.scanning = false;
    }
    else
    {
      this.scanning = true;
      this.platform.ready().then(()=>{this.scanner.startScan(this.selCamera)});
    }

  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }

  public sendFunc(value: any)
  {
    var walletAddress = null;
    this.http.get("/user/info").subscribe(
      (data) =>
      {
        var jsonResp = data.text();
        var jsonArr = JSON.parse(jsonResp);
        walletAddress = jsonArr.walletAddress;
        console.log(jsonArr.coinBalance);
        console.log(value.amount);
        if(jsonArr.coinBalance >= value.amount && value.amount > 0 && Math.floor(value.amount) == value.amount)
        {
          if(hasWallet() == true && walletAddress != null)
          {
            var jsonArrSend: any = {};
            jsonArrSend.address = value.address;
            jsonArrSend.amount = value.amount;
            sendCoin(jsonArrSend, this.http);
          }
          else
          {
            this.viewCtrl.dismiss();
            this.app.getRootNav().push('link_wallet');
            alert("Please ensure your wallet is running before trying to send ERP-Coins.");
          }
        }
        else
        {
          if(value.amount <= 0)
          {
            alert("You cannot send negative or 0 coins.");
          }
          else if(jsonArr.coinBalance >= value.amount)
          {
            alert("You are trying to send more coins than you have.");
          }
          else
          {
            alert("You can only send whole coins. No decimals!");
          }
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}

}
