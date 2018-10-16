import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Splash } from '../pages/splash/splash';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '../http-api';
import { Loading } from '../app-functions';
import { LocationService } from '@ionic-native/google-maps';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { QRCodeModule } from 'angularx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { Ng2ImgToolsModule } from 'ng2-img-tools';

@NgModule({
  declarations: [
    MyApp,
    Splash
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
    Splash
  ],
  providers: [
    LocationService,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BackgroundGeolocation,
    Http,
    Loading,
    FileTransfer,
    FileTransferObject,
    Camera
  ]
})
export class AppModule {}
