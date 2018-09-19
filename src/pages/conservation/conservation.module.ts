import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConservationPage } from './conservation';

@NgModule({
  declarations: [
    ConservationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConservationPage),
  ],
  entryComponents: [
    ConservationPage
  ]
})
export class ConservationPageModule {}
