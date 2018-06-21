import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { AccountPage } from '../account/account';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';

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
<<<<<<< HEAD
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    alert(addr);
    this.http.post(addr, param, options).subscribe
=======
    //this.navCtrl.push(AccountPage);
    this.http.post("/user/login", jsonArr).subscribe
>>>>>>> 58f65bad38382216ba57edb39313a77af18cb5c6
    (
      (data) => //Success
      {
        //alert("Success: " +data.text());
        var jsonResp = JSON.parse(data.text());
        //alert(jsonResp);
        if(jsonResp.success)
        {
          this.presentToast("Welcome!");
          this.navCtrl.push(AccountPage);
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

}
