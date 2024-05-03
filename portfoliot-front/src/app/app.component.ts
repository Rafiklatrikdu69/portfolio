import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ProjetsComponent } from './components/projet/projets/projets.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiProjetService } from './services/api-projet.service';
import { HomeComponent } from './components/home/home.component';
import { TechnologiesComponent } from './components/technos/technologies/technologies.component';
import { ApitechnosService } from './services/apitechnos.service';
import { CompetenceComponent } from './components/competences/competence/competence.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ApiProjetService,ApitechnosService],
  imports: [
    HttpClientModule,
    RouterOutlet,
    CommonModule,
    NavComponent,
    AboutComponent,
    ProjetsComponent,
    HomeComponent,
    TechnologiesComponent,
    CompetenceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfoliot-front';
}
