import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public todos = [];
  public reorderIsEnabled = false;

  constructor(private todoProvider: TodoProvider, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoProvider.getToDos();
  }

  toggleReorder() {
    this.reorderIsEnabled = !this.reorderIsEnabled;
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
