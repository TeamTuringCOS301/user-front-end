import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Events, ModalController } from 'ionic-angular';
import { Http } from '../../http-api';
import { Storage } from '@ionic/storage';
import { checkLoggedIn, openModal, handleError, Loading } from '../../app-functions';

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
  constructor(public loading: Loading, public storage:Storage, public navCtrl: NavController, public toastCtrl: ToastController, public http: Http, public events: Events, public modalCtrl: ModalController) {
    this.user.balance = 0;
    this.user = {};
  }

  ionViewDidLoad(){
    this.loading.showLoadingScreen();
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.storage.get('trackingInterval').then((interval) => {clearInterval(interval);});
    var refresh = false;
    do    {

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
    this.events.subscribe("Reload Balance", () =>
    {
      this.getBalance();
    });
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
    this.loading.doneLoading();
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
    this.loading.showLoadingScreen();
    openModal(modalPage, window);
  }

  receiveErp()
  {
    var modalPage = this.modalCtrl.create('receive_erp', {cssClass: 'send-modal' });
    this.loading.showLoadingScreen();
    openModal(modalPage, window);
  }

  public rewardsPage()
  {
    this.loading.showLoadingScreen();
    this.navCtrl.push('rewards');
  }

  public conservationAreas()
  {
    this.loading.showLoadingScreen();
    this.navCtrl.push('conservation', {});
  }

}
