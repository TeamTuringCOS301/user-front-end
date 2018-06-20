import { HomePage } from '../home/home';
import { ConservationPage } from '../conservation/conservation';
import { RewardsPage } from '../rewards/rewards';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SendPage } from '../sendErp/sendErp';
import { ReceivePage } from '../receiveErp/receiveErp';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CONFIG } from '../../app-config';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  user:any;
  address:any ;
  rootPage: any = AccountPage;
  constructor(public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController, public modalCtrl : ModalController) {
    this.user = {};
    this.user.name = "Dave";
    this.user.balance = 10;
    this.address = CONFIG.url;
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
    var jsonArr:any = {};
    var param = JSON.stringify(jsonArr);
    var addr = this.address+"/user/logout";
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    //this.navCtrl.push(AccountPage);
    this.http.get(addr).subscribe
    (
      (data) => //Success
      {
        this.presentToast();
        this.navCtrl.push(HomePage);
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
