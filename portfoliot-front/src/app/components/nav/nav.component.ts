import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  scroll(){
    const currentPosition = window.pageYOffset;
    window.scrollTo({
      top: currentPosition + window.innerHeight,
      behavior: 'smooth' 
  });
  }
  
  
}
