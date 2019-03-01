import { NgModule } from '@angular/core';
import { FormsUtilisateurInscriptionComponent } from './forms-utilisateur-inscription/forms-utilisateur-inscription';
import { FormsUtilisateurConnexionComponent } from './forms-utilisateur-connexion/forms-utilisateur-connexion';
@NgModule({
	declarations: [FormsUtilisateurInscriptionComponent,
    FormsUtilisateurConnexionComponent],
	imports: [],
	exports: [FormsUtilisateurInscriptionComponent,
    FormsUtilisateurConnexionComponent]
})
export class ComponentsModule {}
