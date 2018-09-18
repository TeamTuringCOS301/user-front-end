import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { Splash } from '../pages/splash/splash';
import { MyApp } from './app.component';
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
import { ViewAlert } from '../pages/viewAlert/viewAlert';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { Http } from '../http-api';
import { LocationService, GoogleMap, GoogleMapOptions, MyLocation } from '@ionic-native/google-maps';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ViewReward } from '../pages/viewReward/viewReward';
import { HardwareButtons } from '@scaffold-digital/ionic-hardware-buttons';
import { EditPage } from '../pages/editProfile/editProfile';
import { UpdatePasswordPage } from '../pages/updatePassword/updatePassword';
import { LinkWalletPage } from '../pages/linkWallet/linkWallet';
import  web3  from 'web3';
import { QRCodeModule } from 'angularx-qrcode';
import { ScanModal } from '../pages/scanModal/scanModal';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Ng2ImgToolsModule } from 'ng2-img-tools';

@NgModule({
  declarations: [
    MyApp,
    ScanModal,
    Splash,
    RegPage,
    LogPage,
    AccountPage,
    ConservationPage,
    RewardsPage,
    MapPage,
    SendPage,
    ReceivePage,
    SendAlert,
    ViewAlert,
    ViewReward,
    DashboardPage,
    EditPage,
    UpdatePasswordPage,
    LinkWalletPage
  ],
  imports: [
    QRCodeModule,
    ZXingScannerModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    Ng2ImgToolsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanModal,
    Splash,
    RegPage,
    LogPage,
    AccountPage,
    ConservationPage,
    RewardsPage,
    MapPage,
    SendPage,
    ReceivePage,
    SendAlert,
    ViewAlert,
    ViewReward,
    DashboardPage,
    EditPage,
    UpdatePasswordPage,
    LinkWalletPage
  ],
  providers: [
    HardwareButtons,
    LocationService,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundGeolocation,
    LocationTrackerProvider,
    Http,
    FileTransfer,
    FileTransferObject,
    Camera
  ]
})
export class AppModule {}
