import { Params, Data, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
  data: Data;
}

export type RouterState = fromRouter.RouterReducerState<RouterStateUrl>;

export class CustomRouteSerializer implements fromRouter.RouterReducerState<RouterStateUrl> {
  state: RouterStateUrl;
  navigationId: number;
  serialize(routerState: RouterStateSnapshot): any {
    let route = routerState.root;
    let data = {};
    const paramMap = new Map<string, any>([]);

    while (route.firstChild) {
      route = route.firstChild;
      data = route.data;
      route.paramMap.keys.forEach((key) => {
        paramMap.set(key, route.paramMap.get(key));
      });
    }

    const params: any = {};
    for (const prop of Array.from(paramMap)) {
      params[prop[0]] = prop[1];
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    return { url, params, queryParams, data };
  }
}
