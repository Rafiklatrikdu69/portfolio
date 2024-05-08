import { Component ,Input} from '@angular/core';
import { ProposComponent } from './propos/propos.component';
import { CommonModule } from '@angular/common';
import { ImagePersoComponent } from './image-perso/image-perso.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: 
  [
    CommonModule,
    ProposComponent,
    ImagePersoComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  p =
  "Salut, je m'appelle Rafik et j'ai 19 ans."
  +"Depuis que je suis tout petit, ma passion pour les ordinateurs"
  +"ne fait que croître. J'ai été fasciné par leur fonctionnement et leur potentiel dès mon plus jeune âge,"
  +"ce qui m'a poussé à explorer le monde du développement informatique. "
  +"J'ai consacré de nombreuses heures à apprendre et à expérimenter avec"
  +"différents langages de programmation, frameworks et technologies.";





}
