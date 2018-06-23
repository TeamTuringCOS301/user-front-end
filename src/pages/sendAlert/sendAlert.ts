import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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

  @ViewChild('fileInput') fileInput;
  isReadyToSave: boolean;
  item: any;
  form: FormGroup;
  sendAlert: any;
  camera:any;
  address:any;
  currentLocation: any;
  constructor(public formBuilder: FormBuilder, public storage: Storage, public viewCtrl: ViewController, public http: Http, public params: NavParams)
  {
    //this.currentLocation = JSON.parse(params.get('location'));
    this.currentLocation = CONFIG.currentLocation;
    this.form = formBuilder.group({
      title: [''],
      profilePic: ['', Validators.required],
      description: [''],
      severity: ['']
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    //this.form = new FormGroup({title: new FormControl(), profilePic: new FormControl(), description: new FormControl(), severity: new FormControl()})
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
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
      jsonArr.image = value.profilePic;
      jsonArr.severity = parseInt(value.severity);
      jsonArr.location = this.currentLocation;
      this.http.post("/alert/add/"+CONFIG.area, jsonArr).subscribe
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
