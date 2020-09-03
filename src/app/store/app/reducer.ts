import * as ActionTypes from './actions';
import { createReducer, on } from '@ngrx/store';
import { Todo } from '../todo.model';

export interface StateI {
  todos: Todo[]
}

const initialState: StateI = {
  todos: []
}

export const reducer = createReducer(
  initialState,
  on(ActionTypes.ADD_TODO, (state:StateI, action:Todo) => {
    return {...state, todos:[...state.todos, action] }
    }
  ),
  on(ActionTypes.REMOVE_TODO, (state:StateI, action:Todo) => {
    const {id} = action
    return {...state, todos: state.todos.filter((t) => t.id !== id)}
  })
)
