import { Component } from '@angular/core';
import { ResultPage } from '../result/result';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //HomeRoot = ResultPage;
  myPhoto: string;
  imageUrl: string;
  

  constructor(public navCtrl: NavController, private camera: Camera) {

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
   this.navCtrl.push(ResultPage);

   
   

  }, (err) => {
   // Handle error
  });
  }
  
    
    //console.log('la eroute fct')
   }
