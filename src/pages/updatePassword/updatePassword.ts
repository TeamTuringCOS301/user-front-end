import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { ToastController } from 'ionic-angular';
import { checkLoggedIn, presentToast } from '../../app-functions';

@IonicPage({
  name:'update_password'
})

@Component({
  selector: 'page-updatePassword',
  templateUrl: 'updatePassword.html'
})
export class UpdatePasswordPage {
  updatePassword: any;
  constructor(public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController)
  {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    this.updatePassword = new FormGroup({oldPassword: new FormControl("", Validators.required), password: new FormControl("", Validators.required), confirmPassword: new FormControl("", Validators.required)});
  }


  updatePass(value)
  {
    if(value.password != value.confirmPassword)
    {
      presentToast(this.toastCtrl, "Please ensure that your passwords match");
    }
    else
    {
      var jsonArr: any = {};
      jsonArr.old = value.oldPassword;
      jsonArr.new = value.password;
      this.http.post("/user/password", jsonArr).subscribe(
        (data) => {
          this.navCtrl.pop();
        },
        (error) => {
          alert("Error: "+error);
        });
    }
  }

}
