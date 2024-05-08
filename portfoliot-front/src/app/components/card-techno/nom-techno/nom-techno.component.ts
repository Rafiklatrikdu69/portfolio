import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nom-techno',
  standalone: true,
  imports: [],
  templateUrl: './nom-techno.component.html',
  styleUrl: './nom-techno.component.css'
})
export class NomTechnoComponent {
@Input()nom!:string;
}
