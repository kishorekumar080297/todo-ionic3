import { Component } from '@angular/core';

import { NavController, AlertController, reorderArray } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo"

import { ArchivedTodosPage } from "../archived-todos/archived-todos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;
  // public ArchivedTodosPage = ArchivedTodosPage;

  constructor(private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProvider.getToDos();
  }

  archivedTodo(todoIndex) {
    this.todoProvider.archivedTodo(todoIndex);
  }

  goToArchivePage() {
    this.navCtrl.push(ArchivedTodosPage);
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event) {
    reorderArray(this.todos, $event);
  }

  openTodoAlert() {
    let addTodoAlert = this.alertController.create({
      title: "Add a ToDo",
      message: "Enter Your ToDo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add ToDo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.addToDos(todoText);
          }
        }
      ]
    });
    addTodoAlert.present();
  }

}
