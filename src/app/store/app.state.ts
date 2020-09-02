import { Todo } from './todo.model';

export interface AppState {
  readonly todos: Todo[];
}
