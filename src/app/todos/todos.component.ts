// this component will render a list
// of todos from the store.
// each todo should have a button
// that allows a user to remove the todo and view each individual todo

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './../store/todo.model';
import * as ToDoActions from '../store/app/actions';
import * as fromRoot from '../store';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<fromRoot.StateI>) {}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(
      select( ({todosStore}) =>  todosStore.todos)
    );
  }

  deleteTodo(todo: Todo) {
    this.store.dispatch(ToDoActions.REMOVE_TODO(todo));
  }
}
