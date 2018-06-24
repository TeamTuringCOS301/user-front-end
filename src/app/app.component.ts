import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Splash } from '../pages/splash/splash';
import { LogPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ConservationPage } from '../pages/conservation/conservation';
import { RewardsPage } from '../pages/rewards/rewards';
import { Http } from '../http-api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LogPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl:ModalController, public toastCtrl: ToastController, public http: Http) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Account', component: DashboardPage},
      { title: 'Conservation Areas', component: ConservationPage},
      { title: 'Rewards', component: RewardsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //let splash = this.modalCtrl.create(Splash);
      //splash.present();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
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
