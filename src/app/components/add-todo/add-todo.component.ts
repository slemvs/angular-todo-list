import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() todos: Array<Todo>;
  @ViewChild('newTitleInput') input: ElementRef;

  private newTodoForm: FormGroup;

  constructor(fb: FormBuilder, private renderer: Renderer) {
    this.newTodoForm = fb.group({
      'newTitle': [null, Validators.required]
    });
  }

  ngOnInit() {
  }
  
  clearForm(){
    this.renderer.invokeElementMethod(this.input.nativeElement, 'blur');
    this.newTodoForm.reset();
  }
  onSubmit(value: any, event: any) {
    this.todos.unshift(new Todo(value.newTitle))
    this.clearForm();
  }
}
