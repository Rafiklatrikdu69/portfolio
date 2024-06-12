import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjetState, TechnoState } from "./app.state";

const selectAppState = createFeatureSelector<ProjetState>('projet');
const selectAppStateTechnos = createFeatureSelector<TechnoState>('technos');



export const selectProjet = createSelector(
  selectAppState,
  (state: ProjetState) => state.projet
);

export const selectTechnos = createSelector(
    selectAppStateTechnos,
    (state: TechnoState) => state.technos
  );