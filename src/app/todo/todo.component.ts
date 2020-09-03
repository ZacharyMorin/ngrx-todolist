// This component will be responsible for displaying data about a
// single task

import { Component, OnInit } from '@angular/core';
import { Todo } from './../store/todo.model';
import { Store } from '@ngrx/store';
import * as toDoActions from './../store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
