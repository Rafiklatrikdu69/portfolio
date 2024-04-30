import { Component, Input } from '@angular/core';
import { Projet } from '../../entity/projet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-projet',
  standalone: true,
  providers:[],
  imports: [CommonModule],
  templateUrl: './card-projet.component.html',
  styleUrl: './card-projet.component.css'
})
export class CardProjetComponent {
  @Input() item !: Projet;
}
