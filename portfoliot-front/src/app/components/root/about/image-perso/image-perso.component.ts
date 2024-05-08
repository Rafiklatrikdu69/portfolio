import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-perso',
  standalone: true,
  imports: [],
  templateUrl: './image-perso.component.html',
  styleUrl: './image-perso.component.css'
})
export class ImagePersoComponent {
@Input() img !:string;
}
