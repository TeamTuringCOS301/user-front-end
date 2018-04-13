import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import { HTTP } from '@ionic-native/http';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegPage {
  regUser: any;
  constructor(private http: HTTP, public navCtrl: NavController) {
  this.regUser = new FormGroup({username: new FormControl(), fName: new FormControl(), sName: new FormControl(), password: new FormControl(), confirmPassword: new FormControl(), cellNumber: new FormControl(), vehicleModel: new FormControl(), vehicleReg: new FormControl()});

  }

  registerUser(value: any) {
  if(value.password != value.confirmPassword)
  {
     window.alert("Passwords do not match");
  }
  else
  {
    let addr: any = "A:'";
    addr+=value.fName;
    addr+="','";
    addr+=value.sName;
    addr+="','";
    addr+= value.username ;
    addr+="','";
    addr+=value.password;
    addr+="','";
    addr+=value.cellNumber;
    addr+="','";
    addr+=value.vehicleModel;
    addr+="','";
    addr+=value.vehicleReg;
    addr+="'";
    addr = "http://137.215.251.159:8080";//"+addr;
    //window.alert(addr);
    this.navCtrl.push(AccountPage);
    /*this.http.get(addr, {}, {}).then(data =>
    {
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      window.alert("Registration Success!");
    }).catch(error => {
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
      window.alert("Registration Failure!");
    });*/
    //window.alert("Success!");    
  }
}

}
