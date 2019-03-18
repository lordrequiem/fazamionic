import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage implements OnInit {
  

  imageUrl: string;
  test: string;
  test2: string;

  ngOnInit(): void {
    this.test = this.navParams.get('image');
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
              
               this.test = this.navParams.get('image');
               //this.test2 = path(this.test);
               
  }
 
}
