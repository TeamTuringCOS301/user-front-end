import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { Http } from '../../http-api';

@Component({
  selector: 'page-sendErp',
  templateUrl: 'sendErp.html'
})

export class SendPage
{
  sendDetails: any;
  constructor(public viewCtrl: ViewController, public http: Http)
  {
    this.sendDetails = new FormGroup({address: new FormControl(), amount: new FormControl(), message: new FormControl()});
  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }

  public sendFunc(value: any)
  {
      var jsonArr: any = {};
      jsonArr.address = value.address;
      jsonArr.amount = value.amount;
      jsonArr.message = value.message;
      this.http.post("", jsonArr).subscribe
      (
        function(response) //Success
        {
          //Handle successful register
        },
        function(error) //Failure
        {
          //Handle error
        },
        function()
        {
          //Completion code
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}
}
