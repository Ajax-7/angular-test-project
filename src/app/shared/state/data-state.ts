export const enum CallState {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  FAIL = 'FAIL',
  NOTFOUND = 'NOTFOUND',
}

export interface DataState<T> {
  data: T;
  callState: CallState;
  error?: any;
}
