import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  myPhoto: any;
  imageUrl: string;

  constructor(public navCtrl: NavController,
              private camera: Camera) {
  }

  
  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
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
