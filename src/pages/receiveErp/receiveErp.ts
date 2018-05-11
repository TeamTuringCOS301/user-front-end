import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({
  selector: 'page-receiveErp',
  templateUrl: 'receiveErp.html'
})

export class ReceivePage
{
  constructor(public viewCtrl: ViewController)
  {
  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}
}
