import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { CardApprentissageComponent } from '../card-apprentissage/card-apprentissage.component';
import { CommonModule } from '@angular/common';
import { ApprentissageCritique } from '../../../../entity/ApprentissageCritique';
import { RadarChartApprentissageNoteComponent } from './radar-chart-apprentissage-note/radar-chart-apprentissage-note.component';

@Component({
  selector: 'panel-apprentissage',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardApprentissageComponent,
    RadarChartApprentissageNoteComponent
  ],
  templateUrl: './panel-apprentissage.component.html',
  styleUrl: './panel-apprentissage.component.css'
})

export class PanelApprentissageComponent {
@Input()apprentissages!:ApprentissageCritique[];
@Input()competenceId !:number ;
}
