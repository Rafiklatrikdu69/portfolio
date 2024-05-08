import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiProjetService } from '../../services/api-projet.service';
import { Projet } from '../../entity/projet';
import { Observable } from 'rxjs';
import { CardProjetComponent } from '../card-projet/card-projet.component';
import { CommonModule } from '@angular/common';
import { CategorieTechnoCardComponent } from '../root/technos/technologies/categorie-techno-card/categorie-techno-card.component';
import { CardTechnoComponent } from '../card-techno/card-techno.component';

@Component({
  selector: 'app-description-projet',
  standalone: true,
  imports: [CommonModule,CardProjetComponent,CardTechnoComponent],
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
