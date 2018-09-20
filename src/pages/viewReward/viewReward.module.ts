import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewReward } from './viewReward';

@NgModule({
  declarations: [
    ViewReward,
  ],
  imports: [
    IonicPageModule.forChild(ViewReward),
  ],
  entryComponents: [
    ViewReward
  ]
})
export class ViewRewardModule {}
