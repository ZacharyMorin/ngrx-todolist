import * as fromTodos from '../store/app/reducer';

import { ActionReducerMap } from '@ngrx/store';

// aggregating all stores together
export interface StateI {
  todosStore: fromTodos.StateI;
}

export const reducers: ActionReducerMap<StateI> = {
  todosStore: fromTodos.reducer
};
