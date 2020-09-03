import { createAction, props} from '@ngrx/store'
import { Todo } from '../todo.model';

export const ADD_TODO = createAction(
  '[TODO] ADD',
  // props is our payload of the action
  props<Todo>()
  );

export const REMOVE_TODO = createAction(
  '[TODO] REMOVE',
  props<Todo>()
  );
