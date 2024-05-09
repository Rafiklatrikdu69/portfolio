import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiProjetService } from '../../services/api-projet.service';
import { Projet } from '../../entity/projet';
import { Observable } from 'rxjs';
import { CardProjetComponent } from '../card-projet/card-projet.component';
import { CommonModule } from '@angular/common';
import { CardTechnoComponent } from '../card-techno/card-techno.component';
import { ButtonGitComponent } from '../button-git/button-git.component';
import { DescriptionPlusComponent } from './description-plus/description-plus.component';
import { RetourPageHomeComponent } from '../retour-page-home/retour-page-home.component';
import { ImageProjetComponent } from '../image-projet/image-projet.component';

@Component({
  selector: 'app-description-projet',
  standalone: true,
  imports: 
  [
    CommonModule,
    CardProjetComponent,
    CardTechnoComponent,
    ButtonGitComponent,
    DescriptionPlusComponent,
    RetourPageHomeComponent,
    ImageProjetComponent
  ],
  templateUrl: './description-projet.component.html',
  styleUrl: './description-projet.component.css'
})
export class DescriptionProjetComponent {
  constructor(private route: ActivatedRoute,private apiProjet:ApiProjetService){}
  projet$ !: Observable<Projet>;
  id: number = 0;
  ngOnInit(): void {
    const idRoute = this.route.snapshot.paramMap.get('id')
    if(idRoute){
      this.id = +idRoute;
      this.projet$ = this.apiProjet.getProjetById(this.id)
      console.log(this.projet$)
      this.projet$.subscribe((projet: Projet) => {
        console.log('Valeur émise par projet$ :', projet.technos);
      });
    }
  }
}