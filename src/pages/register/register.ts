import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { LogPage } from '../login/login';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegPage {
  regUser: any;
  url: any;
  constructor(public storage: Storage, public toastCtrl: ToastController, public navCtrl: NavController, public http: Http) {
    this.regUser = new FormGroup({username: new FormControl(), email:new FormControl(), fName: new FormControl(), sName: new FormControl(), password: new FormControl(), confirmPassword: new FormControl(), walletAddress: new FormControl()});
  }

  public presentToast(message)
  {
    let toast = this.toastCtrl.create(
      {
        message: message,
        duration: 1500,
        position: 'bottom',
        dismissOnPageChange: false
      });
      toast.present();
    }


    registerUser(value: any) {
      var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!regexEmail.test(value.email)) {
        this.presentToast("Please enter a valid email address");
      }
      else if(value.password != value.confirmPassword)
      {
        this.presentToast("Please ensure that your passwords match");
      }
      else
      {
        var jsonArr: any = {};
        jsonArr.username = value.username;
        jsonArr.password = value.password;
        jsonArr.email = value.email;
        jsonArr.name = value.fName;
        jsonArr.surname = value.sName;
        jsonArr.walletAddress = value.walletAddress;
        //jsonArr.vehicleRegistration = value.vehicleReg;
        this.http.post("/user/add", jsonArr).subscribe
        (
          (response) => //Success
          {
          //Handle successful register
          //alert("Success" +response);
          console.log(response);
          this.presentToast("Registration successful! Please log in");
          this.navCtrl.push(AccountPage);
        },
        (error) => //Failure
        {
        //Handle error
        alert("Error" +error);
        console.log("Error");
      }
    );
    //window.alert("Success!");
  }
}

navPop()
{
  this.navCtrl.pop();
}

}
