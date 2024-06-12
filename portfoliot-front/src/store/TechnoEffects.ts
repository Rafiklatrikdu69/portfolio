import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, mergeMap, of } from "rxjs";
import * as actions from './actions';
import { ApitechnosService } from "../app/services/apitechnos.service";
import { Categorie } from "../app/entity/Categorie.model";
@Injectable()
export class TechnoEffects {
    actions$ = inject(Actions)
    TechnosService = inject(ApitechnosService)
    loadTechnos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadTechnos),
      mergeMap(() =>   
        from(this.TechnosService.getAlltechnos()).pipe(
            map((technos : Categorie[]) => 
                actions.loadTechnosSuccess({ technos })),
            catchError((error) =>
              of(actions.loadTechnosFailure({ error: error.message }))
            )
          )
      )
    )
  );
}