import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera/*, CameraOptions*/ } from '@ionic-native/camera';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage implements OnInit {
  
  //ResultRoot = HomePage;
  myPhoto: any;
  imageUrl: string;
  result:any;
  test: any;

  ngOnInit(): void {
    this.test = this.navParams.get('image');
  }

  constructor(public navCtrl: NavController,
              private camera: Camera,
              public navParams: NavParams) {
               //this.result = this.sanitizer.bypassSecurityTrustUrl('data:Image/*;base64, ' + this.navParams.get('image'));
               this.test = this.navParams.get('image');
  }
 
}
