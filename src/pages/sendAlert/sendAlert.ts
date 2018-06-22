import { ViewController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-sendAlert',
  templateUrl: 'sendAlert.html'
})

export class SendAlert
{
  imageURI:any;
  imageFileName:any;
  sendAlert: any;
  address:any;
  currentLocation: any;
  constructor(private transfer: FileTransfer, private camera: Camera, public loadingCtrl: LoadingController, public toastCtrl: ToastControllerpublic storage: Storage, public viewCtrl: ViewController, public http: Http, public params: NavParams)
  {
    //this.currentLocation = JSON.parse(params.get('location'));
    this.currentLocation = CONFIG.currentLocation;
    this.sendAlert = new FormGroup({title: new FormControl(), description: new FormControl(), image: new FormControl(), severity: new FormControl()});
  }

  uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }
}

  getImage() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

  this.camera.getPicture(options).then((imageData) => {
    this.imageURI = imageData;
  }, (err) => {
    console.log(err);
    this.presentToast(err);
  });
}

  public closeModal()
  {
    this.viewCtrl.dismiss();
  }

  public sendFunc(value: any)
  {
      var jsonArr: any = {};
      jsonArr.title = value.title;
      jsonArr.description = value.description;
      jsonArr.image = value.image;
      jsonArr.severity = value.severity;
      jsonArr.location = this.currentLocation;
      this.http.post("/add/"+CONFIG.area, jsonArr).subscribe
      (
        function(response) //Success
        {
          alert(response);//Handle successful register
        },
        function(error) //Failure
        {
          alert(error);//Handle error
        }
      );
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');

    //console.log(this.navParams.get('message'));
}
}
