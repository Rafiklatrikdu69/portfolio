import { Component, Input } from '@angular/core';
import { Projet } from '../../entity/projet.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlipCardFrontComponent } from './flip-card-front/flip-card-front.component';
import { ImageProjetComponent } from '../image-projet/image-projet.component';
import { TechnosComponent } from './technos/technos.component';
@Component({
  selector: 'app-card-projet',
  standalone: true,
  providers:[],
  imports: [
    CommonModule,
    FlipCardFrontComponent,
    ImageProjetComponent,
    TechnosComponent
  ],
  templateUrl: './card-projet.component.html',
  styleUrl: './card-projet.component.css'
})
export class CardProjetComponent {
  @Input() projet !: Projet;
  constructor(private route:Router){}
  navigate(id:number){
      this.route.navigate(['/projet',id]);
  }
}
