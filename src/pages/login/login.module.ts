import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogPage } from './login';

@NgModule({
  declarations: [
    LogPage,
  ],
  imports: [
    IonicPageModule.forChild(LogPage),
  ],
  entryComponents: [
    LogPage
  ]
})
export class LogPageModule {}
