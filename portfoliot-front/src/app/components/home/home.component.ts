import { Component, Directive, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-home',
  standalone: true,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  @ViewChild('presentation') p!: ElementRef;
  presentation: string = 'Bonjour';
  isInitialized: boolean = false;

  constructor(private router:Router) {}
scroll(){
  const currentPosition = window.pageYOffset;
  window.scrollTo({
    top: currentPosition + window.innerHeight,
    behavior: 'smooth' 
});
}
ngOnInit(): void {

  const target = document.querySelector('.tw')
  const writer = new Typewriter(target, {
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    typeColor: 'white'
  })
  
  writer
    .type('Salut ,')
    .rest(700)
    .changeOps({ deleteSpeed: 80 })
    .remove(7)
    .type("Je m'appelle Rafik")
    .rest(700)
    .changeOps({ deleteSpeed: 20 })
    .clear()
    .start()
  
}
  ngAfterViewInit(): void {  
    
  }

  

}
