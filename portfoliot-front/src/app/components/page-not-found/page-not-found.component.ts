import { Component } from '@angular/core';
import { RetourPageHomeComponent } from '../retour-page-home/retour-page-home.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: 
  [
    RetourPageHomeComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
