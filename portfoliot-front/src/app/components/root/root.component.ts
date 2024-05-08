import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projet/projets/projets.component';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technos/technologies/technologies.component';
import { CompetenceComponent } from './competences/competence/competence.component';
import { ApitechnosService } from '../../services/apitechnos.service';
import { ApiProjetService } from '../../services/api-projet.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ApiProjetService,ApitechnosService],
  imports: 
  [
    NavComponent,
    AboutComponent,
    ProjetsComponent,
    HomeComponent,
    TechnologiesComponent,
    CompetenceComponent
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
