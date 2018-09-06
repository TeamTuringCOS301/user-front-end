import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '../../http-api';
@Component({
  selector: 'page-receiveErp',
  templateUrl: 'receiveErp.html'
})

export class ReceivePage
{
  public myAngularxQrCode: string = null;
  message: any;
  constructor(public http: Http, public viewCtrl: ViewController)
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
          this.message = "Please link an external wallet.";
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}
}
