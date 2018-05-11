import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-sendAlert',
  templateUrl: 'sendAlert.html'
})

export class SendAlert
{
  sendAlert: any;
  address:any;
  constructor(public storage: Storage, public viewCtrl: ViewController, public http: Http)
  {
    this.sendAlert = new FormGroup({title: new FormControl(), description: new FormControl(), image: new FormControl()});
    this.storage.get('address').then(val=>{this.address = val;});
  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }

  public sendFunc(value: any)
  {
      var jsonArr: any = {};
      jsonArr.title = value.title;
      jsonArr.description = value.amount;
      jsonArr.image = value.image;
      var param = JSON.stringify(jsonArr);
      var addr = this.address+"/user/alert";
      this.http.get(addr, param).subscribe
      (
        function(response) //Success
        {
          //Handle successful register
        },
        function(error) //Failure
        {
          //Handle error
        }
      );
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
    //console.log(this.navParams.get('message'));
}
}
