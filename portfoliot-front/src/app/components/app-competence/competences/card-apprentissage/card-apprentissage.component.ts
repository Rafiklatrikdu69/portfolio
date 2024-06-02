import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-apprentissage',
  standalone: true,
  imports: [],
  templateUrl: './card-apprentissage.component.html',
  styleUrl: './card-apprentissage.component.css'
})
export class CardApprentissageComponent {
@Input()nom!:string;
}
