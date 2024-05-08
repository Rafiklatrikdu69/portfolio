import { Component, Input } from '@angular/core';
import { Technology } from '../../entity/Technology';
import { ImageTechnoComponent } from './image-techno/image-techno.component';
import { NomTechnoComponent } from './nom-techno/nom-techno.component';

@Component({
  selector: 'app-card-techno',
  standalone: true,
  imports: 
  [
    NomTechnoComponent,
    ImageTechnoComponent
  ],
  templateUrl: './card-techno.component.html',
  styleUrl: './card-techno.component.css'
})
export class CardTechnoComponent {
  
@Input()techno!:Technology;

}
