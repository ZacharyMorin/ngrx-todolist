import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ContainerComponent } from './container/container.component';
import { reducers } from './store';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: ContainerComponent
  },
  {
    path: 'todo/:id',
    component: TodoComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    CreateTodoComponent,
    ContainerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
