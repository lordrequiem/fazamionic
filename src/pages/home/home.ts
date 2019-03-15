import { Component } from '@angular/core';
import { ResultPage } from '../result/result';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myPhoto: any;
  imageUrl: string;

  

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  
 onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,

    }
  this.camera.getPicture(options).then((imageData) => {

   this.myPhoto = imageData;
   //this.photo.push(this.myPhoto);
   this.navCtrl.push(ResultPage, {image: this.myPhoto});

   
   

  }, (err) => {
   // Handle error
  });
  }
  
    
    //console.log('la eroute fct')
   }
