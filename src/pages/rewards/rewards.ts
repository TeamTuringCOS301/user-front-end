import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-rewards',
  templateUrl: 'rewards.html'
})
export class RewardsPage {
  constructor(public navCtrl: NavController) {
  }



  navPop()
  {
    this.navCtrl.pop();
  }

}
