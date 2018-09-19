import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanModal } from './scanModal';

@NgModule({
  declarations: [
    ScanModal,
  ],
  imports: [
    IonicPageModule.forChild(ScanModal),
  ],
  entryComponents: [
    ScanModal
  ]
})
export class ScanModalModule {}
