import { Component, OnInit } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';
import { ApiSemestreService } from '../../services/api-semestre.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Semestre } from '../../../../entity/Semestre';

@Component({
  selector: 'app-competence',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardComponentComponent
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
