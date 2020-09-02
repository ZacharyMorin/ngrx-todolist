// this component will render a list
// of todos from the store.
// each todo should have a button
// that allows a user to remove the todo

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './../store/todo.model';
import { AppState } from './../store/app.state';
import * as ToDoActions from './../store/actions';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<Todo[]>;

  //future Zach: figure out how to get count of Todos currently inside the store.
  todoCount$: Observable<number>;

  constructor(private store: Store<AppState>) {
    //selecting todos which is defined in app module StoreModule.forRoot({}), .select returns an observable
    this.todos$ = store.select('todos');
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log('Delete: ' + todo.name )
    this.store.dispatch(new ToDoActions.RemoveTodo(todo));
  }


}
