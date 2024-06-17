import { Component, Input } from '@angular/core';
import { Experience } from '../../../../entity/Experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experience-scolaire',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './experience-scolaire.component.html',
  styleUrl: './experience-scolaire.component.css'
})
export class ExperienceScolaireComponent {
@Input() experienceS ?: Experience[]
}
