import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-description-plus',
  standalone: true,
  imports: [],
  templateUrl: './description-plus.component.html',
  styleUrl: './description-plus.component.css'
})
export class DescriptionPlusComponent {
@Input() description!: string;
@Input()descriptionplus!:string;
}
