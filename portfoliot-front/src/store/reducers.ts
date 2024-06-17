import { createReducer, on } from "@ngrx/store";
import { Projet } from "../app/entity/projet.model";
import * as Actions from './actions';
import { ProjetState, TechnosState } from "./app.state";

    export const initialState: ProjetState = {
        projets: [],
        loading: false,
        error: ''
        };
        export const initialStateTechno: TechnosState = {
            technos: [],
            loading: false,
            error: ''
            };
    export const ProjetReducer = createReducer(
        initialState,
        
        on(Actions.loadProjet, state => ({ ...state, loading: true })),
        
        on(Actions.loadProjetSuccess, (state, { projets }) =>({ ...state, projets, loading: false })),
        
        on(Actions.loadProjetFailure, (state, { error }) => ({ ...state, error, loading: false })),
        // on(Actions.loadProjetById, (state, { id }) =>({ ...state, id, loading: false })),

    )        

    export const TechnoReducer = createReducer(
        initialStateTechno,
        
        on(Actions.loadTechnos, state => ({ ...state, loading: true })),
        
        on(Actions.loadTechnosSuccess, (state, { technos }) =>({ ...state, technos, loading: false })),
        
        on(Actions.loadTechnosFailure, (state, { error }) => ({ ...state, error, loading: false })),
        
    )  