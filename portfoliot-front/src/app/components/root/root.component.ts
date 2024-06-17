import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projet/projets/projets.component';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technos/technologies/technologies.component';
import { ApitechnosService } from '../../services/apitechnos.service';
import { ApiProjetService } from '../../services/api-projet.service';
import { FooterComponent } from '../footer/footer.component';
import { AppCompetenceComponent } from '../app-competence/app-competence.component';
import { ExperienceComponent } from './experience/experience.component';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  providers: 
  [
    ApiProjetService,
    ApitechnosService,
  ],
  imports: 
  [
    RouterOutlet,
    RouterModule,
    NavComponent,
    AboutComponent,
    ProjetsComponent,
    HomeComponent,
    TechnologiesComponent,
    FooterComponent,
    AppCompetenceComponent,
    ExperienceComponent,
  ],

  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {

}
