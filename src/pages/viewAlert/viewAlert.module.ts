import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewAlert } from './viewAlert';

@NgModule({
  declarations: [
    ViewAlert,
  ],
  imports: [
    IonicPageModule.forChild(ViewAlert),
  ],
  entryComponents: [
    ViewAlert
  ]
})
export class ViewAlertModule {}
