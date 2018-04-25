import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogPage {
  logUser: any;
  constructor(private http: HTTP, public navCtrl: NavController) {
  this.logUser = new FormGroup({username: new FormControl(), password: new FormControl()});

  }

  loginUser(value: any) {
    let addr: any = "localhost:8080/user/login";
    let param:any ='{"username":"';
    param+= value.username ;
    param+= '","password":"';
    param+= value.password;
    param+= '"}';
    //window.alert(addr);
    //window.alert(param);
    //this.navCtrl.push(AccountPage);
    
    this.http.post(addr, param, {}).then(data =>
    {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      //window.alert(data.data);
      //window.alert("Login Success!");
      this.navCtrl.push(AccountPage);
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
      //window.alert(error.data);
       window.alert("Login Failure!");
    });     
}
  navPop()
  {
    this.navCtrl.pop();
  }

}
