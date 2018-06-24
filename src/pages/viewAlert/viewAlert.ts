import { ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../../app-config';
@Component({
  selector: 'page-viewAlert',
  templateUrl: 'viewAlert.html'
})

export class ViewAlert{
  alert:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams)
  {
    this.alert = navParams.get('alert');
    this.alert.severity = CONFIG.severity[this.alert.severity];
    var point = this.alert.image.indexOf("base64") + 6;
    var pointTwo = this.alert.image.indexOf("base64");
    var pointOne = this.alert.image.indexOf("image/") + 5;
    var imageType = this.alert.image.substring(pointOne, pointTwo);
    var newDataPre = "data:image";
    var newDataPost = ";base64,";
    var finalNewData = newDataPre + imageType + newDataPost;
    var oldString = this.alert.image.substring(0, point);
    this.alert.image.replace(oldString , finalNewData);
    finalNewData = finalNewData + this.alert.image.substr(point);
    this.alert.image = finalNewData;
  }

  public blobToDataURL(blob, callback) {
    var a = new FileReader();
    //a.onload = function(e) {callback(e.target.result);}
    alert(blob);
    //a.readAsDataURL(blob);
}

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }
}
