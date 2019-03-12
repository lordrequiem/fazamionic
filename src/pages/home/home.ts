import { Component } from '@angular/core';
import { NavController /*, ToastController, normalizeURL*/ } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myPhoto: any;
  imageUrl: string;

  constructor(public navCtrl: NavController/*, private toastCtrl: ToastController*/, private camera: Camera) {

  }

  
  onTakePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
    }
  this.camera.getPicture(options).then((imageData) => {

   this.myPhoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
  }
}
