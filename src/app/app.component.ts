import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, ToastController, Events} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Splash } from '../pages/splash/splash';
import { LogPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ConservationPage } from '../pages/conservation/conservation';
import { RewardsPage } from '../pages/rewards/rewards';
import { EditPage } from '../pages/editProfile/editProfile';
import { Http } from '../http-api';
import { CONFIG } from '../app-config';
import { UpdatePasswordPage } from '../pages/updatePassword/updatePassword';
import { LinkWalletPage } from '../pages/linkWallet/linkWallet';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //viewCtrl: ViewController;
  rootPage: any = 'login';

  pages: Array<{title: string, component: any}>;

  constructor(public events: Events, public storage: Storage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl:ModalController, public toastCtrl: ToastController, public http: Http) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Account', component: 'account'},
      { title: 'Conservation Areas', component: 'conservation'},
      { title: 'Rewards', component: 'rewards'},
      { title: 'Edit Profile', component: 'edit_profile'},
      { title: 'Change Password', component: 'update_password'},
      { title: 'Link Wallet', component: 'link_wallet'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      window.addEventListener('popstate', () =>
      {
        this.events.publish("Reload Balance");
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }

  presentToast()
  {
    let toast = this.toastCtrl.create(
    {
      message: 'Logged Out',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  logOut()
  {
    //this.navCtrl.push(AccountPage);
    this.http.get("/user/logout").subscribe
    (
      (data) => //Success
      {
        this.presentToast();
        this.nav.setRoot('login');
        this.storage.set('loggedIn', false);
      },
      (error) =>//Failure
      {
        alert("Error: " +error);
      }
    );
  }
}
