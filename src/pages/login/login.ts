import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormGroup, FormControl} from '@angular/forms';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AccountPage } from '../account/account';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogPage {
  logUser: any;
  constructor(private http: Http, public navCtrl: NavController) {
  this.logUser = new FormGroup({username: new FormControl(), password: new FormControl()});

  }

  loginUser(value: any) {
    let addr: any = "http://192.168.43.72:8080/user/login";
    var jsonArr: any = {};
    jsonArr.username = value.username;
    jsonArr.password = value.password;
    var param = JSON.stringify(jsonArr);
    //window.alert(addr);
    //window.alert(param);
    //this.navCtrl.push(AccountPage);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    alert("Post options set");
    this.http.post(addr, param, options).subscribe
    (
      function(data) //Success
      {
        //alert("Success: " +data.text());
        //Test
        var jsonResp = JSON.parse(datra.text());
        if(jsonResp.success)
        {
          this.navCtrl.push(AccountPage);
        }
        else
        {
          alert("Invalid username/password combination");
        }
      },
      function(error) //Failure
      {
        alert("Error: " +error);
      },
      function()
      {
        //Completion code
      }
    );
}
  navPop()
  {
    this.navCtrl.pop();
  }

}
