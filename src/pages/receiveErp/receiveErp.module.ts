import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivePage } from './receiveErp';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    ReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivePage),
    QRCodeModule
  ],
  entryComponents: [
    ReceivePage
  ]
})
export class ReceivePageModule {}
