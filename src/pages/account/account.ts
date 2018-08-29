import { ConservationPage } from '../conservation/conservation';
import { RewardsPage } from '../rewards/rewards';
import { ModalController, Events } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SendPage } from '../sendErp/sendErp';
import { ReceivePage } from '../receiveErp/receiveErp';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { LogPage } from '../login/login';
import web3 from 'web3';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  user:any;
  address:any ;
  rootPage: any = AccountPage;
  constructor(public events: Events, public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController, public modalCtrl : ModalController) {
    this.user = {};
    this.http.get("/user/info").subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        this.user.name = jsonResp.name;
        this.user.balance = jsonResp.coinBalance;
      },
      (error) =>
      {
        alert(error);
      }
    );
    console.log(web3);
  }

  ionViewDidLoad(){
    this.events.subscribe("Reload Balance", () =>
    {
      this.getBalance();
      //this.navCtrl.pop({animate:false});
      //this.navCtrl.push(AccountPage);
      //this.navCtrl.push(AccountPage,{},{animate:false});
    });
  }

  public getBalance()
  {
    this.http.get("/user/info").subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        this.user.balance = jsonResp.coinBalance;
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

  public presentToast()
  {
    let toast = this.toastCtrl.create(
    {
      message: 'Logged Out',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  public sendErp()
  {
    var modalPage = this.modalCtrl.create(SendPage, {cssClass: 'send-modal' }); modalPage.present();
  }

  public receiveErp()
  {
    var modalPage = this.modalCtrl.create(ReceivePage, {cssClass: 'send-modal' }); modalPage.present();
  }

  public logout()
  {
    //this.navCtrl.push(AccountPage);
    this.http.get("/user/logout").subscribe
    (
      (data) => //Success
      {
        this.presentToast();
        this.navCtrl.push(LogPage);
      },
      (error) =>//Failure
      {
        alert("Error: " +error);
      }
    );

  }

  public rewardsPage()
  {
    this.navCtrl.push(RewardsPage);
  }

  public conservationAreas()
  {
    this.navCtrl.push(ConservationPage);
  }

}
