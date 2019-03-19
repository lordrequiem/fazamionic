import { Component} from '@angular/core';
import { ResultPage } from '../result/result';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import ImageService from '../../services/imageServices';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myPhoto: any;
  imageUrl: string;

  

  constructor(public navCtrl: NavController, private camera: Camera/*, private api: ImageService*/) {

  }

  
 onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      targetWidth: 500,
      targetHeight: 500,
      

    }
        this.camera.getPicture(options).then((imageData) => {
          
        this.myPhoto = "data:image/jpeg;base64," + imageData;
        
         /* console.log(this.myPhoto);
          const obs = this.api.sendImage(this.myPhoto);
          obs.subscribe(
            (response) => {
              console.log(response);
              return response;
            });*/
       
        
        this.navCtrl.push(ResultPage, {image: this.myPhoto});

        
        

        }, (err) => {
        // Handle error
        });
      }
   }
