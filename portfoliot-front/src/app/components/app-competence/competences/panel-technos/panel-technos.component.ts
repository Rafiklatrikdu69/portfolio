import { Component, Input } from '@angular/core';
import { Technology } from '../../../../entity/Technology.model';
import { CardTechnoComponent } from '../../../card-techno/card-techno.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-technos',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardTechnoComponent
  ],
  templateUrl: './panel-technos.component.html',
  styleUrl: './panel-technos.component.css'
})
export class PanelTechnosComponent {
@Input() technos!:Technology[];
}
