import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPage } from './editProfile';

@NgModule({
  declarations: [
    EditPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPage),
  ],
  entryComponents: [
    EditPage
  ]
})
export class EditPageModule {}
