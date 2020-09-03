import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // todos: any[];

  constructor(private store: Store<any>) {}

  ngOnInit() {
    /*
     * access the state of todos from the store
     * select function gets desired state and returns an observable
     * we can subscribe to changes made to the state of todos
     */
    // this.store.select('todos').subscribe(state => (this.todos = state));
  }
}
