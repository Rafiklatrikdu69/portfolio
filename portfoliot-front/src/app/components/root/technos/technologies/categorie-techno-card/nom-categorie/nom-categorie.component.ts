import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nom-categorie',
  standalone: true,
  imports: [],
  templateUrl: './nom-categorie.component.html',
  styleUrl: './nom-categorie.component.css'
})
export class NomCategorieComponent {
@Input() categorie!:string;
}
