import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { Splash } from '../pages/splash/splash';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegPage } from '../pages/register/register';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { AccountPage } from '../pages/account/account';
import { ConservationPage } from '../pages/conservation/conservation';
import { RewardsPage } from '../pages/rewards/rewards';
import { MapPage } from '../pages/map/map';
import { SendPage } from '../pages/sendErp/sendErp';
import { ReceivePage } from '../pages/receiveErp/receiveErp';
import { SendAlert } from '../pages/sendAlert/sendAlert';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Splash,
    RegPage,
    LogPage,
    AccountPage,
    ConservationPage,
    RewardsPage,
    MapPage,
    SendPage,
    ReceivePage,
    SendAlert
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Splash,
    RegPage,
    LogPage,
    AccountPage,
    ConservationPage,
    RewardsPage,
    MapPage,
    SendPage,
    ReceivePage,
    SendAlert
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundGeolocation,
    Geolocation,
    LocationTrackerProvider
  ]
})
export class AppModule {}
