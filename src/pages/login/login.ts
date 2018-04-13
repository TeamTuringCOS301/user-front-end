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
    let addr: any = "V:'";
    addr+= value.username ;
    //addr+="','";
   // addr+=value.password;
    addr+="'";
    addr = "http://137.215.251.159:8080";//"+addr;
    //window.alert(addr);
    this.navCtrl.push(AccountPage);
    /*
    this.http.get(addr, {}, {}).then(data =>
    {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      //window.alert(data.data);
      window.alert("Login Success!");
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
      window.alert(error.data);
       window.alert("Login Failure!");
    });     */ 
}

}
