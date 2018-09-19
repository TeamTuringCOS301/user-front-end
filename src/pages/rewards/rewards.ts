import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { ViewReward } from '../viewReward/viewReward';
import { DashboardPage } from '../dashboard/dashboard';
import { checkLoggedIn, openModal } from '../../app-functions';

@IonicPage({
  name: 'rewards',
  defaultHistory: ['dashboard']
})
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {
  rewards: any;

  constructor(public toastCtrl: ToastController, public storage: Storage, public navCtrl: NavController, public http: Http, public modalCtrl: ModalController)
  {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.http.get("/reward/list").subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        this.rewards = jsonResp.rewards;
        console.log(this.rewards);
      },
      (error) =>
      {
        alert(error);
      }
    );
  }

  picked(id)
  {
    var reward = {};
    this.rewards.forEach((reward) =>
    {
      if(reward.id == id)
      {
        var modalPage = this.modalCtrl.create('view_reward', {reward:reward});
        openModal(modalPage, window);
      }
    });
  }

  navPop()
  {
    //this.navCtrl.pop();
  }

}
