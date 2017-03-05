import { Component, OnInit, Input, Output } from '@angular/core';
import { TodoStatus } from "../../models/todoStatusEnum";
import { Todo } from "../../models/todo";
import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() model: Todo;
  @Output() removeItemEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getStatusName(status: TodoStatus){
    return TodoStatus[status];
  }
  
  onItemClick(todo: Todo){
    todo.status = todo.status === TodoStatus.New ? TodoStatus.Done : TodoStatus.New;
  }
  onRemoveItemClick(todo: Todo){
    this.removeItemEmitter.emit(todo);
  }

  ngOnInit() {
  }

}
