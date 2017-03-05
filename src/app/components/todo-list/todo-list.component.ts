import { Component, OnInit, Output } from '@angular/core';
import { Todo } from "../../models/todo";
import * as _ from 'lodash';
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todos: Array<Todo>

  constructor() {
    this.todos = [new Todo("To do"), new Todo("To do"), new Todo("To do to do to do")]
  }

  ngOnInit() {
  }

  removeItem(item: Todo){
    this.todos = _.filter(this.todos, (todo) => todo !== item);
  }
}
