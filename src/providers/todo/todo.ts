// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];

  constructor(public http: Http) {
    console.log('Hello TodoProvider Provider');
  }

  getToDos() {
    return this.todos;
  }

  addToDos(todo) {
    this.todos.push(todo);
  }
}
