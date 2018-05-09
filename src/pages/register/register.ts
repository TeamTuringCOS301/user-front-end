import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegPage {
  regUser: any;
  constructor(private http: Http, public navCtrl: NavController) {
  this.regUser = new FormGroup({username: new FormControl(), email:new FormControl(), fName: new FormControl(), sName: new FormControl(), password: new FormControl(), confirmPassword: new FormControl(), cellNumber: new FormControl(), vehicleModel: new FormControl(), vehicleReg: new FormControl()});

  }

  registerUser(value: any) {
  if(value.password != value.confirmPassword)
  {
     window.alert("Passwords do not match");
  }
  else
  {
    let addr: any = "http://192.168.43.72:8080/user/register";
    var jsonArr: any = {};
    jsonArr.username = value.username;
    jsonArr.password = value.password;
    jsonArr.email = value.email;
    jsonArr.name = value.fName;
    jsonArr.surname = value.sName;
    jsonArr.cellNumber = value.cellNumber;
    //jsonArr.vehicleModel = value.vehicleModel;
    //jsonArr.vehicleRegistration = value.vehicleReg;
    var param = jsonArr;
    alert(addr);
    console.log("Param:");
    console.log(param);
    alert(param);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    alert("Post options set");
    this.http.post(addr, param, options).subscribe
    (
      function(response) //Success
      {
        //Handle successful register
        alert("Success" +response);
        console.log(response);
        return false;
      },
      function(error) //Failure
      {
        //Handle error
        alert("Error" +error);
        console.log("Error");
        return false;
      },
      function()
      {
        //Completion code
        alert("Compl");
        console.log("Success");
        return false;
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
