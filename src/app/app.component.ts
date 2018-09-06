import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, ToastController, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
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

  rootPage: any = LogPage;

  pages: Array<{title: string, component: any}>;

  constructor(public appCtrl: App, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl:ModalController, public toastCtrl: ToastController, public http: Http) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Account', component: DashboardPage},
      { title: 'Conservation Areas', component: ConservationPage},
      { title: 'Rewards', component: RewardsPage},
      { title: 'Edit Profile', component: EditPage},
      { title: 'Change Password', component: UpdatePasswordPage},
      { title: 'Link Wallet', component: LinkWalletPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      window.addEventListener('popstate', () => {
            if (this.nav.canGoBack()) { //Can we go back?
              //if(this.nav.length()>2){history.pushState(null, null, document.URL);}
              this.nav.pop();
            }
      });
      window.onpopstate = (evt) => {
        this.nav.pop();
      };
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    /*if(CONFIG.tracking != -1)
    {
      alert("Tracking is: "+CONFIG.tracking);
      clearInteval(CONFIG.tracking);
      CONFIG.tracking = -1;
    }*/
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
        this.nav.setRoot(LogPage);
      },
      (error) =>//Failure
      {
        alert("Error: " +error);
      }
    );
  }
}
