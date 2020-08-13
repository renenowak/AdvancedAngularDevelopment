import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { Params } from "@angular/router";

export interface State {
  route: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  route: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}
