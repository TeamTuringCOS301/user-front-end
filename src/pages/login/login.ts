import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { RegPage } from '../register/register';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { DashboardPage } from '../dashboard/dashboard';
import { checkLoggedIn, presentToast, handleError } from '../../app-functions';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogPage {
  logUser: any;
  url:any;
  invalidMsg: any = "";
  constructor(public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController) {
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
  //this.storage.set('loggedIn', false);
  this.logUser = new FormGroup({username: new FormControl("", Validators.required), password: new FormControl("", Validators.required)});
}


  loginUser(value: any) {
    this.invalidMsg = "";
    if(!this.logUser.valid)
    {
      presentToast(this.toastCtrl, "Please fill out all of the fields");
      return;
    }
    var jsonArr: any = {};
    jsonArr.username = value.username;
    jsonArr.password = value.password;
    this.http.post("/user/login", jsonArr).subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.success)
        {
          this.storage.set('loggedIn', true);
          this.navCtrl.setRoot('account');
        }
        else
        {
          this.invalidMsg = "Invalid username/password combination";
          presentToast(this.toastCtrl, "Invalid username/password combination");
        }
      },
      (error) =>//Failure
      {
        handleError(this.storage, this.navCtrl, error, this.toastCtrl);
      }
    );
  }

  navPop()
  {
    this.navCtrl.pop();
  }

  registerPage()
  {
    this.navCtrl.push('register');
  }

}
