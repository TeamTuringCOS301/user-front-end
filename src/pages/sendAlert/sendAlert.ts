import { IonicPage, ViewController, NavParams, NavController, Events } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '../../http-api';
import { CONFIG } from '../../app-config';
import { ToastController } from 'ionic-angular';
//import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { Ng2ImgToolsService } from 'ng2-img-tools';
import { addCloseListener, presentToast, handleError, closeModal } from '../../app-functions';

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
  loading: any = false;
  item: any;
  imageBlob: any;
  form: FormGroup;
  sendAlert: any;
  camera:any;
  address:any;
  currentLocation: any;
  severities: any = [];
  imageData: any;
  constructor(public events: Events, public navCtrl: NavController, private ng2ImgToolsService: Ng2ImgToolsService, public toastCtrl: ToastController,public formBuilder: FormBuilder, public storage: Storage, public viewCtrl: ViewController, public http: Http, public navParams: NavParams)
  {
    addCloseListener(this.viewCtrl, window, this.events);
    this.severities = CONFIG.severity;
    this.currentLocation = navParams.get('location');
    this.form = formBuilder.group({
      title: [''],
      profilePic: [''],
      description: ['', Validators.required],
      severity: ['']
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  processWebImage(event) {
    this.loading = true;
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      this.imageData = (readerEvent.target as any).result;
      var position = this.imageData.indexOf(",");
      this.imageBlob = this.imageData.slice(position+1);
      this.loading = false;
      this.form.patchValue({ 'profilePic': this.imageData });
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
    closeModal(this.viewCtrl, this.events);
  }

  public sendFunc(value: any)
  {
      var jsonArr: any = {};
      jsonArr.title = value.title;
      jsonArr.description = value.description;
      jsonArr.image = this.imageBlob;
      jsonArr.severity = parseInt(value.severity);
      jsonArr.location = this.currentLocation;
      var refresh = false;
      do
      {
        this.http.post("/alert/add/"+this.navParams.get('area'), jsonArr).subscribe
        (
          (response)=> //Success
          {
            refresh = false;
            presentToast(this.toastCtrl, "Alert sent");

          },
          (error)=> //Failure
          {
            if(handleError(this.storage, this.navCtrl, error, this.toastCtrl)=="")
            {
              refresh = true;
            }
          }
        );
      }while(refresh);
      this.closeModal();
  }
}
