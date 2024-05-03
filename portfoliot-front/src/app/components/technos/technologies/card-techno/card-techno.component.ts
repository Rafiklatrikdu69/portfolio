import { Component, Input } from '@angular/core';
import { Technology } from '../../../../entity/Technology';

@Component({
  selector: 'app-card-techno',
  standalone: true,
  imports: [],
  templateUrl: './card-techno.component.html',
  styleUrl: './card-techno.component.css'
})
export class CardTechnoComponent {
  
@Input()techno!:Technology;

}
