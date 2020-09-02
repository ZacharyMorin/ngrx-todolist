import { AppState } from './app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as Actions from './actions';
import { Todo } from './todo.model';

export function reducer(state: Todo[], action: Actions.ToDoActions) {
  switch(action.type) {
    case Actions.ToDoActionTypes.ADD_TODO:
      if (state){
        return [...state, action.payload]
      } else {
        return [action.payload]
      }
    case Actions.ToDoActionTypes.REMOVE_TODO:
      let todo = action.payload
      return state.filter((el) => el.id != todo.id)
    default:
      return state;
  }
}
