import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { RegPage } from '../register/register';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { DashboardPage } from '../dashboard/dashboard';

/*@IonicPage({
  name: 'login'
})*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogPage {
  logUser: any;
  url:any;
  constructor(public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController) {
  this.logUser = new FormGroup({username: new FormControl("", Validators.required), password: new FormControl("", Validators.required)});
}

  public presentToast(text)
  {
    let toast = this.toastCtrl.create(
    {
      message: text,
      duration: 1500,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.present();
  }

  loginUser(value: any) {
    if(!this.logUser.valid)
    {
      this.presentToast("Please fill out all of the fields");
      return;
    }
    var jsonArr: any = {};
    jsonArr.username = value.username;
    jsonArr.password = value.password;
    //var param = JSON.stringify(jsonArr);

    /*this.presentToast("Welcome!");
    this.navCtrl.setRoot(DashboardPage);*/
    this.http.post("/user/login", jsonArr).subscribe
    (
      (data) => //Success
      {
        var jsonResp = JSON.parse(data.text());
        if(jsonResp.success)
        {
          this.navCtrl.setRoot(DashboardPage);
          //window.location.href = '/#/account';
        }
        else
        {
          alert("Invalid username/password combination");
        }
      },
      (error) =>//Failure
      {
        alert("Error: "+error);
      }
    );
  }

  navPop()
  {
    this.navCtrl.pop();
  }

  registerPage()
  {
    this.navCtrl.push(RegPage);
  }

}
