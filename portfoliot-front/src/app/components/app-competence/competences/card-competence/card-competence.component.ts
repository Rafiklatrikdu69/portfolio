import { Component, Input } from '@angular/core';
import { Competence } from '../../../../entity/Competence';
import { CommonModule } from '@angular/common';

import { PanelProjetComponent } from '../panel-projet/panel-projet.component';
import { PanelApprentissageComponent } from '../panel-apprentissage/panel-apprentissage.component';

@Component({
  selector: 'app-card-competence',
  standalone: true,
  imports: 
  [
    CommonModule,
    PanelProjetComponent,
    PanelApprentissageComponent
  ],
  templateUrl: './card-competence.component.html',
  styleUrl: './card-competence.component.css'
})
export class CardCompetenceComponent {
@Input() competence !:Competence
}
