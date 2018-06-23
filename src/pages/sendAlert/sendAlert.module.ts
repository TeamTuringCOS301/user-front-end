import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SendAlert } from './sendAlert';

@NgModule({
  declarations: [
    SendAlert,
  ],
  imports: [
    IonicPageModule.forChild(SendAlert),
    TranslateModule.forChild()
  ],
  exports: [
    SendAlert
  ]
})
export class SendAlertModule {
  
}
