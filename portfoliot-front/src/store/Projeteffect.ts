import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, mergeMap, of } from "rxjs";
import { ApiProjetService } from "../app/services/api-projet.service";
import * as ProjetActions from './actions';
import { Projet } from "../app/entity/projet.model";
@Injectable()
export class Projeteffect {
    actions$ = inject(Actions)
    ProjetService = inject(ApiProjetService)
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjetActions.loadProjet),
      mergeMap(() =>   
        from(this.ProjetService.getAllProjets()).pipe(
            map((projet : Projet[]) => ProjetActions.loadProjetSuccess({ projet })),
            catchError((error) =>
              of(ProjetActions.loadProjetFailure({ error: error.message }))
            )
          )
      )
    )
  );
}