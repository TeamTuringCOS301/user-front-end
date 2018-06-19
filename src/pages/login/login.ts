import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccountPage } from '../account/account';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CONFIG } from '../../app-config';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogPage {
  logUser: any;
  url:any;
  constructor(public storage: Storage, public toastCtrl: ToastController, public http: Http, public navCtrl: NavController) {
  this.logUser = new FormGroup({username: new FormControl("", Validators.required), password: new FormControl("", Validators.required)});
  this.url = CONFIG.url;
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
    var addr = this.url+"/user/login";
    var jsonArr: any = {};
    jsonArr.username = value.username;
    jsonArr.password = value.password;
    var param = JSON.stringify(jsonArr);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    //this.navCtrl.push(AccountPage);
    this.http.post(addr, param, options).subscribe
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
