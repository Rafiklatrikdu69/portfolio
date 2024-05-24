import { Component } from '@angular/core';
import { CompetenceComponent } from './competences/competence/competence.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-app-competence',
  standalone: true,
  imports: 
  [
    HttpClientModule,
    CompetenceComponent
  ],
  templateUrl: './app-competence.component.html',
  styleUrl: './app-competence.component.css'
})
export class AppCompetenceComponent {

}
