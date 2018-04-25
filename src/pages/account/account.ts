import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConservationPage } from '../conservation/conservation';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  rootPage: any = AccountPage;
  constructor(public navCtrl: NavController) {   
  }

  logout()
  {
    this.navCtrl.push(HomePage);
  }

  conservationAreas()
  {
    this.navCtrl.push(ConservationPage);
  }

}
