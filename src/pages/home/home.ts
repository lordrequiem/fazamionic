import { Component } from '@angular/core';
import { ResultPage } from '../result/result';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imageUrl: string;

  camOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    saveToPhotoAlbum: true,
    targetWidth: 1000,
    targetHeight: 1000,
  }

  constructor(private navCtrl: NavController, private camera: Camera, private http: HttpClient) {
  }

  onTakePhoto() {
    this.camera.getPicture(this.camOptions).then((imageData) => {

      let myPhoto = "data:image/jpeg;base64," + imageData;

      this.http
        .post('http://192.168.43.97:8888/upload', { file: myPhoto })
        .subscribe((r) => {
          this.navCtrl.push(ResultPage, {
            image: myPhoto,
            result: r
          });
        });

    },
      err => {
        console.log(err)
      }
    );
  }
}
