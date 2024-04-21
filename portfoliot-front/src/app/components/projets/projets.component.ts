import { Component, OnInit } from '@angular/core';
import { ApiProjetService } from '../../services/api-projet.service';
import { Projet } from '../../entity/projet';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projets',
  standalone:true,
  imports:[CommonModule],
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
