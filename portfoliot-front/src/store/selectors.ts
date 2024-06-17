import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProjetState, TechnosState } from "./app.state";

const selectAppState = createFeatureSelector<ProjetState>('projet');
const selectAppStateTechnos = createFeatureSelector<TechnosState>('technos');



export const selectProjets = createSelector(
  selectAppState,
  (state: ProjetState) => state.projets
);
export const selectProjet = createSelector(
    selectAppState,
    (state: ProjetState) => state.projets
  );
export const selectTechnos = createSelector(
    selectAppStateTechnos,
    (state: TechnosState) => state.technos
  );
