import { Component } from '@angular/core';
// import { ResultPage } from '../result/result';
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

  constructor(public navCtrl: NavController, private camera: Camera, public http: HttpClient) {
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

      this.http.post(
        'http://192.168.43.106:8888/upload',
        { file: this.myPhoto }
        //   {
        //   headers: {
        //       "Access-Control-Allow-Origin": "*",
        //       "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",}
        //   }).subscribe(res=>{
        //   console.log(res);
        //   this.navCtrl.push(ResultPage, {image: this.myPhoto});
        // }
      );
    },
      (err) => { });
  }
}
