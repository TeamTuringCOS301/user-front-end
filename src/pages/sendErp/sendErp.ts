import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';
import QRCode from '../../qrcode';
import * as $ from 'jquery';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-sendErp',
  templateUrl: 'sendErp.html'
})

export class SendPage
{
  sendDetails: any;
  scannedCode = null;
  constructor(/*public barcodeScanner: BarcodeScanner,*/ public viewCtrl: ViewController, public http: Http)
  {
    this.sendDetails = new FormGroup({address: new FormControl(), amount: new FormControl(), message: new FormControl()});
  }

  /*scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }*/

  scan()
  {

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
