import { Component, inject } from '@angular/core';
import { ApiProjetService } from '../../../../services/api-projet.service';
import { Projet } from '../../../../entity/projet.model';
import { CommonModule } from '@angular/common';
import { CardProjetComponent } from '../../../card-projet/card-projet.component';
import { Observable } from 'rxjs';
import { Store, provideStore } from '@ngrx/store';
import { AppState, appEffects, appStore } from '../../../../../store/store';
import * as ProjetActions from '../../../../../store/actions';
import  {selectProjets} from '../../../../../store/selectors';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-projets',
  standalone:true,
  imports:[
    CommonModule,
    CardProjetComponent,
    HttpClientModule
  ],
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent{
  api = inject(ApiProjetService)
  store = inject(Store<AppState>)
  projets$ :  Observable<Projet[]> = this.store.select(selectProjets);
 constructor(){
  this.store.dispatch(ProjetActions.loadProjet());
 }
}
