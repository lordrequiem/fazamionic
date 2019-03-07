import { Component } from '@angular/core';

/**
 * Generated class for the FormsUtilisateurConnexionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'forms-utilisateur-connexion',
  templateUrl: 'forms-utilisateur-connexion.html'
})
export class FormsUtilisateurConnexionComponent {

  text: string;

  constructor() {
    console.log('Hello FormsUtilisateurConnexionComponent Component');
    this.text = 'Hello World';
  }

}
