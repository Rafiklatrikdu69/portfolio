import { Component, Input } from '@angular/core';
import { Projet } from '../../entity/projet';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-projet',
  standalone: true,
  providers:[],
  imports: [
    CommonModule
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
