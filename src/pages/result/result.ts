import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage implements OnInit {
  
  rep: string;
  imageUrl: string;
  test: string;
  test2: string;

  ngOnInit(): void {
    //this.test = this.navParams.get('image');
    this.http
    .post('http://192.168.43.84:8888/upload', {  }).subscribe((resultat: any) => {
      console.log(resultat);
      this.rep=resultat;});
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,private http: HttpClient) {
              
               this.test = this.navParams.get('image');
               //this.test2 = path(this.test);
               
  }
  getResultat() { 

    this.http
    .get('http://192.168.43.84:8888/reponse', {  }).subscribe((resultat: any) => {
      console.log(resultat);
      this.rep=resultat;
    });

  }
}
