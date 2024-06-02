import { Component } from '@angular/core';
import { ApiSemestreService } from '../../services/api-semestre.service';
import { CommonModule } from '@angular/common';
import { CardCompetenceComponent } from '../card-competence/card-competence.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../../footer/footer.component';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-competence',
  standalone: true,
  imports: 
  [
    MatCardModule,
    CommonModule,
    CardCompetenceComponent,
    NavMobileComponent,
    FormsModule,
    FooterComponent
  ],
    templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent {
  selectedValue = null;
  constructor(private api: ApiSemestreService){}
  observable$ =  this.api.getSemester()
  ngOnInit(): void {
    this.api.getSemestreById(1)
  }
  getSemestre(semestre:number){
      this.api.getSemestreById(semestre)
  }
  getSemestreString(value: string){
    const numberSelected = parseInt(value)
    this.api.getSemestreById(numberSelected)

  }
}
