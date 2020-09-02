import { Action } from '@ngrx/store'
import { Todo } from './todo.model';

export enum ToDoActionTypes {
  ADD_TODO = '[TODO] Add',
  REMOVE_TODO = '[TODO] Remove'
}

export class AddTodo implements Action {
  readonly type = ToDoActionTypes.ADD_TODO;
  constructor(public payload: Todo){}
}

export class RemoveTodo implements Action {
  readonly type = ToDoActionTypes.REMOVE_TODO;
  constructor(public payload: Todo){}
}

// define type alias for all actions defined above for it
// to be used in our reducer
export type ToDoActions = AddTodo | RemoveTodo
