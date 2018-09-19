import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegPage } from './register';

@NgModule({
  declarations: [
    RegPage,
  ],
  imports: [
    IonicPageModule.forChild(RegPage),
  ],
  entryComponents: [
    RegPage
  ]
})
export class RegisterPageModule {}
