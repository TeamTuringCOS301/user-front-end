import { ViewController, Platform, App } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';
import { hasWallet } from '../../wallet-functions';
import { ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { ZXingScannerModule, ZXingScannerComponent } from '@zxing/ngx-scanner';
import { LinkWalletPage } from '../linkWallet/linkWallet';

@Component({
  selector: 'page-sendErp',
  templateUrl: 'sendErp.html'
})

export class SendPage
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
      });
      if(hasWallet() == true && walletAddress != null)
      {
        var jsonArr: any = {};
        jsonArr.address = value.address;
        jsonArr.amount = value.amount;
        jsonArr.message = value.message;
        this.http.post("", jsonArr).subscribe
        (
          (response) => //Success
          {
            //Handle successful register
          },
          (error) =>//Failure
          {
            //Handle error
          },
          () =>
          {
            //Completion code
          }
        );
      }
      else
      {
        this.viewCtrl.dismiss();
        this.app.getRootNav().push(LinkWalletPage);
        //this.nav.push(LinkWalletPage);
        alert("Please link a wallet before trying to send ERP-Coins.");
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}

}
