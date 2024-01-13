import { UPDATE, INIT, ActionReducer, Action } from '@ngrx/store';
import { State } from 'src/app/state';

const blackList: string[] = [
  INIT,
  UPDATE,
  '@ngrx/effects/init',
  '@ngrx/store-devtools/recompute'
];

export function debugReducer(reducer: ActionReducer<any>): ActionReducer<any>{
  return (state: State, action: Action) => {
    const result = reducer(state, action);
    if ( blackList.indexOf(action.type) !== -1) {
      return result;
    }
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('prev state', state);
    console.log('new state', result);
    console.groupEnd();

    return result;
  };
}
