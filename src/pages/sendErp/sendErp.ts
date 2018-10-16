import { Events, IonicPage, ViewController, Platform, App, ToastController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';
import { hasWallet, sendCoin } from '../../wallet-functions';
import { ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { addCloseListener, handleError, presentLongToast, presentToast, closeModal, Loading } from '../../app-functions';

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
  currCam: any = 1;
  camArr: any = [];
  constructor(public loading: Loading, public events: Events, public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController, public app: App, public platform: Platform, public viewCtrl: ViewController, public http: Http)
  {
    addCloseListener(this.viewCtrl, window, this.events);
    this.sendDetails = new FormGroup({address: new FormControl(), amount: new FormControl()});
  }

  ionViewDidLoad()
  {
    this.loading.doneLoading();
  }

  scanSuccess(val)
  {
    console.log(val);
    this.scanner.resetScan();
    this.scanning = false;
    this.otherKey = val;
    console.log("Other key is: " +this.otherKey);
  }

  cameras(val)
  {
    console.log(val);
    this.camArr = val;
    var cam = 1;
    if(val[cam] == null)
    {
      cam = 0;
    }
    this.selCamera = val[cam];
  }

  swapCam()
  {
    console.log("Swp");
    var newCam = (this.currCam +1) % 2;
    this.currCam = newCam;
    if(this.camArr[newCam] == null)
    {

    }
    else
    {
      this.selCamera = this.camArr[newCam];
      this.platform.ready().then(()=>{this.scanner.startScan(this.selCamera)});
      this.scanning = true;
    }

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
    closeModal(this.viewCtrl, this.events);
  }

  public sendFunc(value: any)
  {
    var walletAddress = null;
    var refresh = false;
    this.loading.showLoadingScreen();
    do
    {
      this.http.get("/user/info").subscribe(
        (data) =>
        {
          refresh = false;
          var jsonResp = data.text();
          var jsonArr = JSON.parse(jsonResp);
          walletAddress = jsonArr.walletAddress;
          if(jsonArr.coinBalance >= value.amount && value.amount > 0 && Math.floor(value.amount) == value.amount)
          {
            if(hasWallet() == true && walletAddress != null)
            {
              var jsonArrSend: any = {};
              jsonArrSend.address = value.address;
              jsonArrSend.amount = value.amount;
              sendCoin(jsonArrSend, this.http);
              this.sendDetails.reset();
              presentToast(this.toastCtrl, "Coins sent");
              this.closeModal();
            }
            else if(walletAddress != null)
            {
              this.closeModal();
              this.app.getRootNav().push('link_wallet');
              presentLongToast(this.toastCtrl, "Please ensure your wallet plugin is running before trying to send ERP-Coins.");
            }
            else
            {
              this.closeModal();
              this.app.getRootNav().push('link_wallet');
              presentLongToast(this.toastCtrl, "You need to link your account to an external wallet to send coins.");
            }
          }
          else
          {
            if(value.amount <= 0)
            {
              presentToast(this.toastCtrl, "You cannot send negative or 0 coins.");
            }
            else if(jsonArr.coinBalance <= value.amount)
            {
              presentToast(this.toastCtrl, "You are trying to send more coins than you have.");
            }
            else
            {
              presentToast(this.toastCtrl, "You can only send whole coins. No decimals!");
            }
          }
        },
        (error) =>
        {
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) =="")
          {
            refresh = true;
          }
        });
    }while(refresh);
    this.loading.doneLoading();
  }
}
