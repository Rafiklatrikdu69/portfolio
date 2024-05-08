import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card-front',
  standalone: true,
  imports: [],
  templateUrl: './flip-card-front.component.html',
  styleUrl: './flip-card-front.component.css'
})
export class FlipCardFrontComponent {
@Input() nom!:string;
@Input() description!:string;
}
