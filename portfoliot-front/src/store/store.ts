import { Action, ActionReducer } from "@ngrx/store";
import { ProjetReducer, TechnoReducer } from "./reducers";

import { Projeteffect } from "./Projeteffect";
import { ProjetState, TechnoState } from "./app.state";
import { TechnoEffects } from "./TechnoEffects";

export interface AppState {
    projet: ProjetState,
    technos: TechnoState
  }
  
  export interface AppStore {
    projet: ActionReducer<ProjetState, Action>,
    technos : ActionReducer<TechnoState, Action>
  }
  
  export const appStore: AppStore = {
    projet: ProjetReducer,
    technos:TechnoReducer
  }
  
  export const appEffects = [Projeteffect,TechnoEffects];