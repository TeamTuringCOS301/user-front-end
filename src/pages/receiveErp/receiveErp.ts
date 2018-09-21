import { Events, IonicPage, App, ViewController, NavController, ToastController} from 'ionic-angular';
import { Component} from '@angular/core';
import { Http } from '../../http-api';
import { addCloseListener, handleError, presentLongToast, closeModal } from '../../app-functions';
import { Storage } from '@ionic/storage';

@IonicPage({
  name:'receive_erp'
})

@Component({
  selector: 'page-receiveErp',
  templateUrl: 'receiveErp.html'
})

export class ReceivePage
{
  public myAngularxQrCode: string = null;
  message: any;
  constructor(public events: Events, public storage: Storage, public toastCtrl: ToastController, public app: App, public navCtrl: NavController, public http: Http, public viewCtrl: ViewController)
  {
    addCloseListener(this.viewCtrl, window, this.events);
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
          presentLongToast(this.toastCtrl, "Please link a wallet before trying to receive ERP-Coins.");
        }
      },
      (error) =>
      {
        handleError(this.storage, this.navCtrl, error, this.toastCtrl);
      }
    );
  }

  ionViewDidLeave()
  {
    this.events.publish("Reload Balance");
  }

  public closeModal()
  {
    closeModal(this.viewCtrl, this.events);
  }

}
