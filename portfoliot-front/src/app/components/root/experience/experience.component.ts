import { Component, inject } from '@angular/core';
import { ApiExperienceService } from '../../../services/api-experience.service';
import { Experience } from '../../../entity/Experience.model';
import { CommonModule } from '@angular/common';
import { CardExperienceComponent } from './card-experience/card-experience.component';
@Component({
  selector: 'experience',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardExperienceComponent,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
apiExperience = inject(ApiExperienceService)
experience : Promise<Experience[] | undefined> = this.apiExperience.getExperience();
}
