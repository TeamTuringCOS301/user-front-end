import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';

@Component({
  selector: 'page-sendAlert',
  templateUrl: 'sendAlert.html'
})

export class SendAlert
{
  sendAlert: any;
  address:any;
  currentLocation: any;
  constructor(public storage: Storage, public viewCtrl: ViewController, public http: Http, public params: NavParams)
  {
    //this.currentLocation = JSON.parse(params.get('location'));
    this.sendAlert = new FormGroup({title: new FormControl(), description: new FormControl(), image: new FormControl()});
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
      jsonArr.location = this.currentLocation;
      this.http.post("/user/alert", jsonArr).subscribe
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
