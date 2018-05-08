import { HomePage } from '../home/home';
import { ConservationPage } from '../conservation/conservation';
import { RewardsPage } from '../rewards/rewards';
import { ModalController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { SendPage } from '../sendErp/sendErp';
import { ReceivePage } from '../receiveErp/receiveErp';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  rootPage: any = AccountPage;
  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {
  }

  public sendErp()
  {
    var modalPage = this.modalCtrl.create(SendPage, {cssClass: 'send-modal' }); modalPage.present();
  }

  public receiveErp()
  {
    var modalPage = this.modalCtrl.create(ReceivePage, {cssClass: 'send-modal' }); modalPage.present();
  }

  public logout()
  {
    this.navCtrl.push(HomePage);
  }

  public rewardsPage()
  {
    this.navCtrl.push(RewardsPage);
  }

  public conservationAreas()
  {
    this.navCtrl.push(ConservationPage);
  }

}
