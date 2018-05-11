import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegPage } from '../register/register';
import { LogPage } from '../login/login';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage: any;
  rootPage: any = HomePage;
  constructor(public storage: Storage, public navCtrl: NavController) {
    this.pushPage = RegPage;
    this.storage.set('area', 99);
    this.storage.set('address', "http://192.168.43.72:8080");
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
