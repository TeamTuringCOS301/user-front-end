import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegPage } from '../register/register';
import { LogPage } from '../login/login';
import { HomePage } from '../home/home';
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

}
