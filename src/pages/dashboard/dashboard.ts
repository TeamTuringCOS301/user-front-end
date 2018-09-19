import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Events, ModalController } from 'ionic-angular';
import { Http } from '../../http-api';
import { ReceivePage } from '../receiveErp/receiveErp';
import { SendErpPage} from '../sendErp/sendErp';
import { ConservationPage } from '../conservation/conservation';
import { RewardsPage} from '../rewards/rewards';
import { Storage } from '@ionic/storage';
import { checkLoggedIn, openModal } from '../../app-functions';
import web3 from 'web3';

@IonicPage({
  name:'account'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  user:any;
  address:any ;
  constructor(public storage:Storage, public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public events: Events, public modalCtrl: ModalController) {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.user = {};
    this.http.get("/user/info").subscribe
    (
      (data) =>
      {
        var jsonResp = JSON.parse(data.text());
        console.log(jsonResp);
        this.user.name = jsonResp.name;
        this.user.balance = jsonResp.coinBalance;
      },
      (error) =>
      {
        console.log(error);
      }
    );
    console.log(web3);
  }

  ionViewDidLoad(){
    this.events.subscribe("Reload Balance", () =>
    {
      this.getBalance();
    });

    this.events.subscribe("UpdatedDetails", () =>
    {
      this.http.get("/user/info").subscribe
      (
        (data) =>
        {
          var jsonResp = JSON.parse(data.text());
          console.log(jsonResp);
          this.user.name = jsonResp.name;
          this.user.balance = jsonResp.coinBalance;
        },
        (error) =>
        {
          console.log(error);
        }
      );
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
        console.log(error);
      }
    );
  }

  sendErp()
  {
    var modalPage = this.modalCtrl.create('send_erp', {cssClass: 'send-modal' });
    openModal(modalPage, window);
  }

  receiveErp()
  {
    var modalPage = this.modalCtrl.create('receive_erp', {cssClass: 'send-modal' });
    openModal(modalPage, window);
  }

  public rewardsPage()
  {
    this.navCtrl.push('rewards');
  }

  public conservationAreas()
  {
    this.navCtrl.push('conservation', {});
  }

}
