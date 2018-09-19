import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendAlert } from './sendAlert';

@NgModule({
  declarations: [
    SendAlert,
  ],
  imports: [
    IonicPageModule.forChild(SendAlert),
  ],
  entryComponents: [
    SendAlert
  ]
})
export class SendAlertModule {}
