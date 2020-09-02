// This component will be responsible for displaying data about a
// single task

import { Component, OnInit } from '@angular/core';
import { Todo } from './../store/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from './../store/app.state';
import * as toDoActions from './../store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo = Todo;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {}

}
