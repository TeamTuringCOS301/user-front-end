import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendErpPage } from './sendErp';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    SendErpPage,
  ],
  imports: [
    IonicPageModule.forChild(SendErpPage),
    ZXingScannerModule
  ],
  entryComponents: [
    SendErpPage
  ]
})
export class SendPageModule {}
