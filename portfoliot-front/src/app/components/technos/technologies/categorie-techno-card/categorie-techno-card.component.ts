import { Component, Input } from '@angular/core';
import { Categorie } from '../../../../entity/Categorie';
import { CommonModule } from '@angular/common';
import { CardTechnoComponent } from '../card-techno/card-techno.component';

@Component({
  selector: 'app-categorie-techno-card',
  standalone: true,
  imports: [CommonModule,CardTechnoComponent],
  templateUrl: './categorie-techno-card.component.html',
  styleUrl: './categorie-techno-card.component.css'
})
export class CategorieTechnoCardComponent {
  @Input() categorie!:Categorie;
}
