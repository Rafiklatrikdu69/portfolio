import { Component } from '@angular/core';
import { ApitechnosService } from '../../../services/apitechnos.service';
import { Technology } from '../../../entity/Technology';
import { Categorie } from '../../../entity/Categorie';
import { CommonModule } from '@angular/common';
import { CategorieTechnoCardComponent } from './categorie-techno-card/categorie-techno-card.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    CommonModule,
    CategorieTechnoCardComponent
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  constructor(private api:ApitechnosService){}
      techno$: Observable<Categorie[]> =  this.api.getAlltechnos();
}
