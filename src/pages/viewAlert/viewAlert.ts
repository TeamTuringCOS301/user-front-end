import { ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
import { Http } from '../../http-api';
@Component({
  selector: 'page-viewAlert',
  templateUrl: 'viewAlert.html'
})

export class ViewAlert{
  alert:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams)
  {
    this.alert = navParams.get('alert');
  }

  public ionViewDidLoad()
  {

    if(alert.image == 0)
    {
        alert("Image is blank");
    }
    else
    {
      var point = alert.image.indexOf("base64") + 6;
      var pointTwo = alert.image.indexOf("base64");
      var pointOne = alert.image.indexOf("image/") + 5;
      var imageType = alert.image.substring(pointOne, pointTwo);
      var newDataPre = "data:image";
      var newDataPost = ";base64,";
      var finalNewData = newDataPre + imageType + newDataPost;
      var oldString = alert.image.substring(0, point);
      alert.image.replace(oldString , finalNewData);
      finalNewData = finalNewData + alert.image.substr(point);
      alert.image = finalNewData;
    }
  }

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }
}
