import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage implements OnInit {

  result: string = '';
  imageUrl: string;
  imgBase64: string;

  ngOnInit(): void {

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imgBase64 = this.navParams.get('image');
    this.result = this.navParams.get('result');
  }

}