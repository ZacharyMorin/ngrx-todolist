import * as fromTodos from './reducer';

import { ActionReducerMap } from '@ngrx/store';

// aggregating all stores together
export interface StateI {
  todosStore: fromTodos.StateI;
}

export const reducers: ActionReducerMap<StateI> = {
  todosStore: fromTodos.reducer
};
