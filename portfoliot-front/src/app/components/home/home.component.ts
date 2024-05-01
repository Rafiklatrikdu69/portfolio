import { Component, ElementRef, ViewChild } from '@angular/core';
import Typewriter from '../../../../node_modules/t-writer.js/dist/t-writer.js'

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

  constructor() {}
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
      typeColor: 'black'
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
}
