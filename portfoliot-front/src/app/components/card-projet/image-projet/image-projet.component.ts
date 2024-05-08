import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-projet',
  standalone: true,
  imports: [],
  templateUrl: './image-projet.component.html',
  styleUrl: './image-projet.component.css'
})
export class ImageProjetComponent {
@Input() img!:string;
}
