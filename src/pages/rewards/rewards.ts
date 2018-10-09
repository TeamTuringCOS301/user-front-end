import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, ModalController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { checkLoggedIn, openModal, handleError } from '../../app-functions';

@IonicPage({
  name: 'rewards',
  defaultHistory: ['account']
})
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {
  rewards: any;
  allRewards: any;

  constructor(public toastCtrl: ToastController, public storage: Storage, public navCtrl: NavController, public http: Http, public modalCtrl: ModalController)
  {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    var refresh = false;
    do
    {
      this.http.get("/reward/list").subscribe
      (
        (data) => //Success
        {
          var jsonResp = JSON.parse(data.text());
          this.allRewards = jsonResp.rewards;
          this.rewards = this.allRewards;
          this.allRewards.forEach((reward) => {reward.image = CONFIG.url +"/reward/image/"+reward.id;});
          console.log(this.allRewards);
          refresh = false;
        },
        (error) =>
        {
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "")
          {
            refresh = true;
          }
        }
      );
    }while(refresh);
  }

  onSearchInput(data)
  {
    this.rewards = [];
    var searched = data.target.value;
    if (searched && searched.trim() != '') {
      this.allRewards.filter((item) => {
        var lowName = item.name.toLowerCase();
        var lowArea = item.areaName.toLowerCase();
        var lowSearch = searched.toLowerCase();
        if(lowName.indexOf(lowSearch) >= 0 || lowArea.indexOf(lowSearch) >= 0)
        {
            this.rewards.push(item);
        }
      })
    }
    else
    {
      this.rewards = this.allRewards;
    }
  }

  onSearchCancel(data)
  {
    this.rewards = this.allRewards;
  }

  picked(id)
  {
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
    this.navCtrl.pop();
  }

}
