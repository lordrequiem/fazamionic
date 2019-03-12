import { Component } from '@angular/core';
import { NavController /*, ToastController, normalizeURL*/ } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
  this.camera.getPicture(options).then((imageData) => {

   this.myPhoto = 'data:image/jpeg;base64,' + imageData;
  }, (err) => {
   // Handle error
  });
}

  

  /*onTakePhoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }).then(
      (data) => {
        if (data) {
          this.imageUrl = normalizeURL(data);
        }
      }
    ).catch(
      (error) => {
        this.toastCtrl.create({
          message: error.message,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    )
  }*/

}
