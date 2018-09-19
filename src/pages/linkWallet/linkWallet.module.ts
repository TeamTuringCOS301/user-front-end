import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkWalletPage } from './linkWallet';

@NgModule({
  declarations: [
    LinkWalletPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkWalletPage),
  ],
  entryComponents: [
    LinkWalletPage
  ]
})
export class LinkWalletPageModule {}
