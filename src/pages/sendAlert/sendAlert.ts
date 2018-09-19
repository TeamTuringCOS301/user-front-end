import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Ng2ImgToolsService } from 'ng2-img-tools';

@IonicPage({
  name:'send_alert'
})

@Component({
  selector: 'page-sendAlert',
  templateUrl: 'sendAlert.html'
})

export class SendAlert
{

  @ViewChild('fileInput') fileInput;
  isReadyToSave: boolean;
  item: any;
  imageBlob: any;
  form: FormGroup;
  sendAlert: any;
  camera:any;
  address:any;
  currentLocation: any;
  severities: any = [];
  constructor(private ng2ImgToolsService: Ng2ImgToolsService, public toastCtrl: ToastController,public formBuilder: FormBuilder, public storage: Storage, public viewCtrl: ViewController, public http: Http, public navParams: NavParams)
  {
    this.severities = CONFIG.severity;
    this.currentLocation = navParams.get('location');
    this.form = formBuilder.group({
      title: [''],
      profilePic: ['', Validators.required],
      description: [''],
      severity: ['']
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  presentToast(message)
  {
    let toast = this.toastCtrl.create(
    {
      message: message,
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      var position = imageData.indexOf(",");
      this.imageBlob = imageData.slice(position+1);
      this.form.patchValue({ 'profilePic': imageData });
    };
    this.ng2ImgToolsService.resize([event.target.files[0]], CONFIG.alertSideLengthPx, CONFIG.alertSideLengthPx).subscribe((res) => {
          reader.readAsDataURL(res);
      }, (error) => {
          console.log(error);
      });
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profilePic'].value + ')';
  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
    return false;
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
      jsonArr.image = this.imageBlob;
      jsonArr.severity = parseInt(value.severity);
      jsonArr.location = this.currentLocation;
      this.http.post("/alert/add/"+CONFIG.area, jsonArr).subscribe
      (
        (response)=> //Success
        {
          this.presentToast("Alert sent");
        },
        (error)=> //Failure
        {
          alert(error);//Handle error
        }
      );
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad ModalPage');
  }
}
