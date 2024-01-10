import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { RouterState } from '@angular/router';
import { debugReducer } from '../shared/state';
import * as fromRouter from '@ngrx/router-store';

// tslint:disable-next-line: no-empty-interface
export interface State {
  router: RouterState;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debugReducer] : [];
