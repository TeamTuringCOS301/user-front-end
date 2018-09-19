import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePasswordPage } from './updatePassword';

@NgModule({
  declarations: [
    UpdatePasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatePasswordPage),
  ],
  entryComponents: [
    UpdatePasswordPage
  ]
})
export class UpdatePasswordPageModule {}
