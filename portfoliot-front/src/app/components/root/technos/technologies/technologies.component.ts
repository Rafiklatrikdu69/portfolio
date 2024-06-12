import { Component, inject } from '@angular/core';
import { ApitechnosService } from '../../../../services/apitechnos.service';

import { Categorie } from '../../../../entity/Categorie.model';
import { CommonModule } from '@angular/common';
import { CategorieTechnoCardComponent } from './categorie-techno-card/categorie-techno-card.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../store/store';
import { selectTechnos } from '../../../../../store/selectors';
import * as action from '../../../../../store/actions';
@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    CommonModule,
    CategorieTechnoCardComponent
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
    store = inject(Store<AppState>)
    techno$: Observable<Categorie[]> = this.store.select(selectTechnos)
  constructor(){
    this.store.dispatch(action.loadTechnos())
  }
  ngOnInit(): void {

  }

}
