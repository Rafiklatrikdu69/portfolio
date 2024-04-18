import { Component, OnInit } from '@angular/core';
import { ApiProjetService } from '../../services/api-projet.service';
import { Projet } from '../../entity/projet';

@Component({
  selector: 'app-projets',
  standalone:true,
  providers:[],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent{
  projet: Projet[] =[];

  constructor(private api: ApiProjetService) {}

  ngOnInit(): void {
    this.api.getAllProjets().subscribe((data) => {
      console.log(data);
      this.projet = data
    });
  }
}
