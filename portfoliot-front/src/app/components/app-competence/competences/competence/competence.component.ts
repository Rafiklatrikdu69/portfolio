import { Component } from '@angular/core';
import { ApiSemestreService } from '../../services/api-semestre.service';
import { CommonModule } from '@angular/common';
import { CardCompetenceComponent } from '../card-competence/card-competence.component';
import { CardProjetComponent } from '../../../card-projet/card-projet.component';


@Component({
  selector: 'app-competence',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardCompetenceComponent,
    
    
  ],
    templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent {
 
  constructor(private api: ApiSemestreService){}
  observable$ =  this.api.getSemester()
  ngOnInit(): void {
    this.api.getSemestreById(1)
  }
  getSemestre(semestre:number){
      this.api.getSemestreById(semestre)
  }
 
}
