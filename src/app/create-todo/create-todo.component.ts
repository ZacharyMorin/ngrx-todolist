import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as ToDoActions from '../store/app/actions';
import * as fromRoot from '../store';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  constructor(private store: Store<fromRoot.StateI>) {}

  addTodo(name:string, desc:string) {
    const genID = (): number => {
      return  Math.floor(Math.random() * 1000);
    }
    this.store.dispatch(ToDoActions.ADD_TODO({id:genID(), name:name, description: desc}));
  }

  ngOnInit(): void {}
}
