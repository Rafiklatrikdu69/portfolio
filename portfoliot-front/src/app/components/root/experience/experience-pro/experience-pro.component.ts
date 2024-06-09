import { Component, Input } from '@angular/core';
import { Experience } from '../../../../entity/Experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'experience-pro',
  standalone: true,
  imports: 
  [
    CommonModule
  ],
  templateUrl: './experience-pro.component.html',
  styleUrl: './experience-pro.component.css'
})
export class ExperienceProComponent {
@Input()experiences!:Experience[] | undefined;
}
