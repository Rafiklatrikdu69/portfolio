import { Component, Input } from '@angular/core';
import { CardProjetComponent } from '../../../card-projet/card-projet.component';
import { PanelTechnosComponent } from '../panel-technos/panel-technos.component';
import { Projet } from '../../../../entity/projet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-projet',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardProjetComponent,
    PanelTechnosComponent
  ],
  templateUrl: './panel-projet.component.html',
  styleUrl: './panel-projet.component.css'
})
export class PanelProjetComponent {
@Input()projet!:Projet;
}
