import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Events, ModalController } from 'ionic-angular';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { checkLoggedIn, openModal, handleError } from '../../app-functions';
import web3 from 'web3';

@IonicPage({
  name:'account'
})
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  user:any = {};
  address:any ;
  constructor(public storage:Storage, public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public events: Events, public modalCtrl: ModalController) {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.user.balance = 0;
    this.user = {};
    var refresh = false;
    do
    {
      this.http.get("/user/info").subscribe
      (
        (data) =>
        {
          var jsonResp = JSON.parse(data.text());
          console.log(jsonResp);
          this.user.name = jsonResp.name;
          this.user.balance = jsonResp.coinBalance;
          refresh = false;
        },
        (error) =>
        {
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "")
          {
            console.log("No internet connection, retrying...");
            refresh = true;
          }
        }
      );
    }while(refresh);

    console.log(web3);
  }

  ionViewDidLoad(){
    this.events.subscribe("Reload Balance", () =>
    {
      this.getBalance();
    });
    //this.events.publish("Reload Balance");

    this.events.subscribe("UpdatedDetails", () =>
    {
      var refresh = false;
      do
      {
        this.http.get("/user/info").subscribe
        (
          (data) =>
          {
            var jsonResp = JSON.parse(data.text());
            this.user.name = jsonResp.name;
            this.user.balance = jsonResp.coinBalance;
            refresh = false;
          },
          (error) =>
          {
            if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "")
            {
              console.log("No internet connection, retrying...");
              refresh = true;
            }
          }
        );
      }while(refresh);
    });
  }

  public getBalance()
  {
    var refresh = false;
    do
    {
      this.http.get("/user/info").subscribe
      (
        (data) =>
        {
          var jsonResp = JSON.parse(data.text());
          this.user.balance = jsonResp.coinBalance;
          refresh = false;
        },
        (error) =>
        {
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "")
          {
            console.log("No internet connection, retrying...");
            refresh = true;
          }
        }
      );
    }while(refresh);
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
