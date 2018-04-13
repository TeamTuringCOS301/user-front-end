import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegPage } from '../register/register';
import { LogPage } from '../login/login';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage: any;
  rootPage: any = HomePage;
  constructor(public navCtrl: NavController) {   
    this.pushPage = RegPage;
  }

  registerPage()
  {
    this.navCtrl.push(RegPage);
  }

  loginPage()
  {
    this.navCtrl.push(LogPage);
  }

}

