import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Events, ModalController } from 'ionic-angular';
import { Http } from '../../http-api';
import { ReceivePage } from '../receiveErp/receiveErp';
import { SendPage} from '../sendErp/sendErp';
import { ConservationPage } from '../conservation/conservation';
import { RewardsPage} from '../rewards/rewards';
import web3 from 'web3';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  user:any;
  address:any ;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public events: Events, public modalCtrl: ModalController) {
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
        alert(error);
      }
    );
    console.log(web3);
    //this.getBalance();
  }

  ionViewDidLoad(){
    this.events.subscribe("Reload Balance", () =>
    {
      this.getBalance();
      //this.navCtrl.pop({animate:false});
      //this.navCtrl.push(AccountPage);
      //this.navCtrl.push(AccountPage,{},{animate:false});
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
          alert(error);
        }
      );
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

  /*public presentToast()
  {
    let toast = this.toastCtrl.create(
    {
      message: 'Logged Out',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }*/

  sendErp()
  {
    var modalPage = this.modalCtrl.create(SendPage, {cssClass: 'send-modal' });
    modalPage.present();
  }

  receiveErp()
  {
    var modalPage = this.modalCtrl.create(ReceivePage, {cssClass: 'send-modal' });
    modalPage.present();
  }

  /*public logout()
  {
    //this.navCtrl.push(AccountPage);
    this.http.get("/user/logout").subscribe
    (
      (data) => //Success
      {
        this.presentToast();
        this.navCtrl.setRoot(LogPage);
      },
      (error) =>//Failure
      {
        alert("Error: " +error);
      }
    );
  }*/

  public rewardsPage()
  {
    this.navCtrl.push(RewardsPage);
  }

  public conservationAreas()
  {
    this.navCtrl.push(ConservationPage, {});
  }

}
