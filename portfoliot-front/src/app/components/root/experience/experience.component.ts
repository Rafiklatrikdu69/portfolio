import { Component, inject } from '@angular/core';
import { ApiExperienceService } from '../../../services/api-experience.service';
import { Experience } from '../../../entity/Experience.model';
import { CommonModule } from '@angular/common';
import { ExperienceProComponent } from './experience-pro/experience-pro.component';
import { FilterExperiencePipe } from './pipe/filter-experience.pipe';
import { ExperienceScolaireComponent } from './experience-scolaire/experience-scolaire.component';
import { StyleExperienceDirective } from './directive/style-experience.directive';
@Component({
  selector: 'experience',
  standalone: true,

  imports: 
  [
    CommonModule,
    ExperienceProComponent,
    ExperienceScolaireComponent,
    FilterExperiencePipe,
    StyleExperienceDirective
    
  ],

  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',

})
export class ExperienceComponent {
apiExperience = inject(ApiExperienceService)
experiences : Promise<Experience[] | undefined> = this.apiExperience.getExperience();
}
