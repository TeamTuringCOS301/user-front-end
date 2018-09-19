import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { checkLoggedIn, presentToast } from '../../app-functions';

@IonicPage({
  name:'edit_profile'
})

@Component({
  selector: 'page-edit',
  templateUrl: 'editProfile.html'
})
export class EditPage {
  updateUser: any;
  url:any;
  currentDetails: any;
  constructor(public events: Events, public toastCtrl: ToastController, public storage: Storage, public http: Http, public navCtrl: NavController) {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.updateUser = new FormGroup({email:new FormControl("", Validators.required), fName: new FormControl("", Validators.required), sName: new FormControl("", Validators.required)});
    this.currentDetails = {};
    this.http.get("/user/info").subscribe(
      (data) => {
        var jsonResp = JSON.parse(data.text());
        this.currentDetails.email = jsonResp.email;
        this.currentDetails.name = jsonResp.name;
        this.currentDetails.surname = jsonResp.surname;
        this.currentDetails.walletAddress = jsonResp.walletAddress;
      },
      (error) => {
        console.log(error);
      });
  }


  upUser(value)
  {
    if(!this.updateUser.valid)
    {
      presentToast(this.toastCtrl, "Please fill out all of the fields");
      return;
    }
    var jsonArr: any = {};
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(value.email)) {
      presentToast(this.toastCtrl, "Please enter a valid email address");
    }
    else
    {
      jsonArr.email = value.email;
      jsonArr.name = value.fName;
      jsonArr.surname = value.sName;
      this.http.post("/user/update", jsonArr).subscribe(
        (data) => {
          var jsonResp = JSON.parse(data.text());
          this.events.publish("UpdatedDetails");
          this.navCtrl.pop();
        },
        (error) => {
          alert("Error: "+error);
        });
    }
  }

}
