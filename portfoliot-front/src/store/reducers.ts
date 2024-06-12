import { createReducer, on } from "@ngrx/store";
import { Projet } from "../app/entity/projet.model";
import * as Actions from './actions';
import { ProjetState, TechnoState } from "./app.state";

    export const initialState: ProjetState = {
        projet: [],
        loading: false,
        error: ''
        };
        export const initialStateTechno: TechnoState = {
            technos: [],
            loading: false,
            error: ''
            };
    export const ProjetReducer = createReducer(
        initialState,
        
        on(Actions.loadProjet, state => ({ ...state, loading: true })),
        
        on(Actions.loadProjetSuccess, (state, { projet }) =>({ ...state, projet, loading: false })),
        
        on(Actions.loadProjetFailure, (state, { error }) => ({ ...state, error, loading: false })),
    )        

    export const TechnoReducer = createReducer(
        initialStateTechno,
        
        on(Actions.loadTechnos, state => ({ ...state, loading: true })),
        
        on(Actions.loadTechnosSuccess, (state, { technos }) =>({ ...state, technos, loading: false })),
        
        on(Actions.loadTechnosFailure, (state, { error }) => ({ ...state, error, loading: false })),
    )  