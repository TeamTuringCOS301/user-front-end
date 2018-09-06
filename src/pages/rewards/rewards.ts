import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { ViewReward } from '../viewReward/viewReward';
import { DashboardPage } from '../dashboard/dashboard';

/*@IonicPage({
  name: 'rewards',
  defaultHistory: ['dashboard']
})*/
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {
  rewards: any;

  constructor(public navCtrl: NavController, public http: Http, public modalCtrl: ModalController) {
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
        var modalPage = this.modalCtrl.create(ViewReward, {reward:reward}); modalPage.present();
      }
    });
  }

  navPop()
  {
    //this.navCtrl.pop();
  }

}
