import { Component, Input } from '@angular/core';
import { Categorie } from '../../entity/Categorie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorie-techno-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorie-techno-card.component.html',
  styleUrl: './categorie-techno-card.component.css'
})
export class CategorieTechnoCardComponent {
  @Input() item!:Categorie;
}
