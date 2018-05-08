import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'page-sendErp',
  templateUrl: 'sendErp.html'
})

export class SendPage
{
  sendDetails: any;
  constructor(public viewCtrl: ViewController)
  {
    this.sendDetails = new FormGroup({address: new FormControl(), message: new FormControl()});
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
