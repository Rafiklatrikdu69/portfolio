import { Component } from '@angular/core';
import { ApiProjetService } from '../../../services/api-projet.service';
import { Projet } from '../../../entity/projet';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardProjetComponent } from '../card-projet/card-projet.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projets',
  standalone:true,
  imports:[
    CommonModule,
    CardProjetComponent],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent{
  projet: Projet[] =[];
  projets$ :  Observable<Projet[]> = this.api.getAllProjets();//Angular s'occupe de recuperer les données.
  constructor(private api: ApiProjetService,private router :Router) {}
}
