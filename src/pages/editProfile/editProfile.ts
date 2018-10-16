import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { ToastController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { checkLoggedIn, presentToast, handleError, Loading } from '../../app-functions';

@IonicPage({
  name:'edit_profile',
  defaultHistory: ['account']
})

@Component({
  selector: 'page-edit',
  templateUrl: 'editProfile.html'
})
export class EditPage {
  updateUser: any;
  url:any;
  currentDetails: any;
  constructor(public loading: Loading, public events: Events, public toastCtrl: ToastController, public storage: Storage, public http: Http, public navCtrl: NavController) {
    this.updateUser = new FormGroup({email:new FormControl("", Validators.required), fName: new FormControl("", Validators.required), sName: new FormControl("", Validators.required)});
    this.currentDetails = {};
  }

  ionViewDidLoad()
  {
    checkLoggedIn(this.storage, this.toastCtrl, this.navCtrl);
    var refresh = false;
    do
    {
      this.http.get("/user/info").subscribe(
        (data) => {
          refresh = false;
          var jsonResp = JSON.parse(data.text());
          this.currentDetails.email = jsonResp.email;
          this.currentDetails.name = jsonResp.name;
          this.currentDetails.surname = jsonResp.surname;
          this.currentDetails.walletAddress = jsonResp.walletAddress;
        },
        (error) => {
          console.log(error);
          if(handleError(this.storage, this.navCtrl, error, this.toastCtrl)=="")
          {
            refresh = true;
          }
        });
    }while(refresh);
    this.loading.doneLoading();
  }


  upUser(value)
  {
    if(!this.updateUser.valid)
    {
      presentToast(this.toastCtrl, "Please fill out all of the fields");
      return;
    }
    var jsonArr: any = {};
    var regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(value.email)) {
      presentToast(this.toastCtrl, "Please enter a valid email address");
    }
    else
    {
      jsonArr.email = value.email;
      jsonArr.name = value.fName;
      jsonArr.surname = value.sName;
      var refresh = false;
      this.loading.showLoadingScreen();
      do
      {
        this.http.post("/user/update", jsonArr).subscribe(
          (data) =>
          {
            refresh = false;
            this.events.publish("UpdatedDetails");
            this.navCtrl.pop();
          },
          (error) =>
          {
            if(handleError(this.storage, this.navCtrl, error, this.toastCtrl)=="")
            {
              refresh = true;
            }
          });
      }while(refresh);
      this.loading.doneLoading();
    }
  }

}
