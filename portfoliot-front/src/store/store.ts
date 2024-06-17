import { Action, ActionReducer } from "@ngrx/store";
import { ProjetReducer, TechnoReducer } from "./reducers";

import { Projeteffect } from "./Projeteffect";
import { ProjetState, TechnosState } from "./app.state";
import { TechnoEffects } from "./TechnoEffects";

export interface AppState {
    projet: ProjetState,
    technos: TechnosState
  }
  
  export interface AppStore {
    projet: ActionReducer<ProjetState, Action>,
    technos : ActionReducer<TechnosState, Action>
  }
  
  export const appStore: AppStore = {
    projet: ProjetReducer,
    technos:TechnoReducer
  }
  
  export const appEffects = [Projeteffect,TechnoEffects];