import { createAction, props } from "@ngrx/store";
import { Projet } from "../app/entity/projet.model";
import { Technology } from "../app/entity/Technology.model";
import { Categorie } from "../app/entity/Categorie.model";

export const loadProjet = createAction('[Projet] Load Projet');
export const loadProjetSuccess = createAction('[Projet] Load Projet Success', props<{ projets: Projet[]}>());
export const loadProjetFailure = createAction('[Projet] Load Projet Failure', props<{ error: string }>());
export const loadProjetById = createAction('[Projet] Load Projet By Id', props<{ id: number }>());
export const loadProjetSuccessById  = createAction('[Projet] Load Projet Success', props<{ projet: Projet }>());



export const loadTechnos = createAction('[Categorie] Load Categorie');
export const loadTechnosSuccess = createAction('[Categorie] Load Categorie Success', props<{ technos: Categorie[] }>());
export const loadTechnosFailure = createAction('[Categorie] Load Categorie Failure', props<{ error: string }>());