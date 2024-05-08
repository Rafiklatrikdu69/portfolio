import { Component, Input } from '@angular/core';
import { Technology } from '../../../entity/Technology';

@Component({
  selector: 'app-technos',
  standalone: true,
  imports: [],
  templateUrl: './technos.component.html',
  styleUrl: './technos.component.css'
})
export class TechnosComponent {
@Input()technos!:Technology[];
}
