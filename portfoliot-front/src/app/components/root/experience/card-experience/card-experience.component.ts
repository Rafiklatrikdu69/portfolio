import { Component, Input, input } from '@angular/core';
import { Experience } from '../../../../entity/Experience.model';

@Component({
  selector: 'card-experience',
  standalone: true,
  imports: [],
  templateUrl: './card-experience.component.html',
  styleUrl: './card-experience.component.css'
})
export class CardExperienceComponent {
@Input() ExperienceContent?:Experience;
}
