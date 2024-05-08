import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-techno',
  standalone: true,
  imports: [],
  templateUrl: './image-techno.component.html',
  styleUrl: './image-techno.component.css'
})
export class ImageTechnoComponent {
@Input() img!:string;
}
