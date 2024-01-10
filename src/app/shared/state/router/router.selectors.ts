import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '..';

export const selectRouterState = createFeatureSelector<RouterState>('router');
export const selectRouteUrl = createSelector(
  selectRouterState,
  state => state && state.state.url,
);

export const selectRouteParams = createSelector(
  selectRouterState,
  state => state && state.state.params,
);

export const selectRouteQueryParams = createSelector(
  selectRouterState,
  state => state.state.queryParams
)
