import { NgModule } from '@angular/core';
import { FormsUtilisateurInscriptionComponent } from './forms/forms-utilisateur-inscription/forms-utilisateur-inscription';
import { FormsUtilisateurConnexionComponent } from './forms/forms-utilisateur-connexion/forms-utilisateur-connexion';
import { ConnexionFazamComponent } from './connexion-fazam/connexion-fazam';
@NgModule({
	declarations: [
		ConnexionFazamComponent,
		FormsUtilisateurInscriptionComponent,
    	FormsUtilisateurConnexionComponent
	],
	imports: [],
	exports: [ConnexionFazamComponent,
		FormsUtilisateurInscriptionComponent,
    FormsUtilisateurConnexionComponent
	]
})
export class ComponentsModule {}
