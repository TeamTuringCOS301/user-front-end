import { ViewController, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';
import { ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { ZXingScannerModule, ZXingScannerComponent } from '@zxing/ngx-scanner';

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
  constructor(public platform: Platform, public viewCtrl: ViewController, public http: Http)
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
      var jsonArr: any = {};
      jsonArr.address = value.address;
      jsonArr.amount = value.amount;
      jsonArr.message = value.message;
      this.http.post("", jsonArr).subscribe
      (
        function(response) //Success
        {
          //Handle successful register
        },
        function(error) //Failure
        {
          //Handle error
        },
        function()
        {
          //Completion code
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}

}
