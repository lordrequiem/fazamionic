import { Component } from '@angular/core';

/**
 * Generated class for the ConnexionFazamComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'connexion-fazam',
  templateUrl: 'connexion-fazam.html'
})
export class ConnexionFazamComponent {

  text: string;

  constructor() {
    console.log('Hello ConnexionFazamComponent Component');
    this.text = 'Hello World';
  }

}
