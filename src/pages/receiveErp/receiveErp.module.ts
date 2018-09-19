import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceivePage } from './receiveErp';

@NgModule({
  declarations: [
    ReceivePage,
  ],
  imports: [
    IonicPageModule.forChild(ReceivePage),
  ],
  entryComponents: [
    ReceivePage
  ]
})
export class ReceivePageModule {}
