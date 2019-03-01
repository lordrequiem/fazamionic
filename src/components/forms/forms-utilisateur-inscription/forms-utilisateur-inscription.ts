import { Component } from '@angular/core';

/**
 * Generated class for the FormsUtilisateurInscriptionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'forms-utilisateur-inscription',
  templateUrl: 'forms-utilisateur-inscription.html'
})
export class FormsUtilisateurInscriptionComponent {

  text: string;

  constructor() {
    console.log('Hello FormsUtilisateurInscriptionComponent Component');
    this.text = 'Hello World';
  }

}
