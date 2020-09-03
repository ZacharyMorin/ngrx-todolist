import * as Actions from './actions';
import { Todo } from './todo.model';

export interface StateI {
  todos: Todo[]
}

const initialState: StateI = {
  todos: []
}

export function reducer(state: StateI = initialState, action: Actions.ToDoActions) {
  switch(action.type) {
    case Actions.ToDoActionTypes.ADD_TODO:
      return { ...state, todos:[...state.todos, action.payload] }
    case Actions.ToDoActionTypes.REMOVE_TODO:
      const {id} = action.payload
      return {...state, todos: state.todos.filter( t=> t.id !== id)}
    default:
      return state;
  }
}
