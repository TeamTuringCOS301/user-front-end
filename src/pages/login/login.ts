import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { presentToast, handleError, Loading } from '../../app-functions';

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
  constructor(public loading: Loading, public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController) {
  this.logUser = new FormGroup({username: new FormControl("", Validators.required), password: new FormControl("", Validators.required)});
}

ionViewWillLoad()
{
  this.storage.get('loggedIn').then
  (
     (val) =>
     {
       if(val == true)
       {
         this.navCtrl.setRoot('account');
       }
     }
 );
  this.loading.doneLoading();
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
    var refresh = false;
    this.loading.showLoadingScreen();
    do
    {
      this.http.post("/user/login", jsonArr).subscribe
      (
        (data) => //Success
        {
          var jsonResp = JSON.parse(data.text());
          refresh = false;
          if(jsonResp.success)
          {
            this.storage.set('loggedIn', true).then(() => {this.navCtrl.setRoot('account');});

          }
          else
          {
            this.invalidMsg = "Invalid username/password combination";
            //presentToast(this.toastCtrl, "Invalid username/password combination");
          }
        },
        (error) =>//Failure
        {
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl) == "")
          {
            refresh = true;
          }
        }
      );
    }while(refresh);
    this.loading.doneLoading();
  }

  navPop()
  {
    this.navCtrl.pop();
  }

  registerPage()
  {
    this.loading.showLoadingScreen();
    this.navCtrl.push('register');
  }

}
