import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { presentToast, handleError } from '../../app-functions';

@IonicPage({
  name:'register',
  defaultHistory: ['login']
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegPage {
  regUser: any;
  url: any;
  usernameTaken: any = "";
  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public http: Http) {
    storage.get('loggedIn').then
    (
       (val) =>
       {
         if(val == true)
         {
           this.navCtrl.setRoot('account');
         }
       }
   );
    this.regUser = new FormGroup({username: new FormControl("", Validators.required), email:new FormControl("", Validators.required), fName: new FormControl("", Validators.required), sName: new FormControl("", Validators.required), password: new FormControl("", Validators.required), confirmPassword: new FormControl("", Validators.required)});
  }



registerUser(value: any)
{
  this.usernameTaken = "";
  var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!regexEmail.test(value.email))
  {
    presentToast(this.toastCtrl, "Please enter a valid email address");
  }
  else if(value.password != value.confirmPassword)
  {
    presentToast(this.toastCtrl, "Please ensure that your passwords match");
  }
  else
  {
    var jsonArr: any = {};
    jsonArr.username = value.username;
    jsonArr.password = value.password;
    jsonArr.email = value.email;
    jsonArr.name = value.fName;
    jsonArr.surname = value.sName;
    this.http.post("/user/add", jsonArr).subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.success)
        {
          presentToast(this.toastCtrl, "Registration successful!");
          this.storage.set('loggedIn', true).then(() => {this.navCtrl.setRoot('account');});

        }
        else
        {
          this.usernameTaken = "Username already in use";
          console.log("username taken");
        }

      },
      (error) => //Failure
      {
        handleError(this.storage, this.navCtrl, error, this.toastCtrl);
      }
    );
  }
}

navPop()
{
  this.navCtrl.pop();
}

}
