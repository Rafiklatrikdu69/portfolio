import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propos',
  standalone: true,
  imports: [],
  templateUrl: './propos.component.html',
  styleUrl: './propos.component.css'
})
export class ProposComponent {
  @Input()  propos!:String;
}
