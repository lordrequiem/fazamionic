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
  myPhoto: any;
  imageUrl: string;

  constructor(private navCtrl: NavController, private camera: Camera, private http: HttpClient) {
  }

  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      targetWidth: 500,
      targetHeight: 500,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.myPhoto = "data:image/jpeg;base64," + imageData;

      console.log("ok")
      this.http
        .post('http://192.168.43.4:8888/upload', { file: this.myPhoto })
        .subscribe(r => { console.log(r) });
        this.navCtrl.push(ResultPage, {image: this.myPhoto});
    },
      err => { console.log(err) }
    );
  }
}
