import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public items = [];

  constructor(
    private builder: FormBuilder,
  ) {}

  taskForm: FormGroup = this.builder.group({
    todoText: '',
  })

  ngOnInit() {}

  save() {
    console.log(this.taskForm)
    if(this.taskForm.controls.todoText.value !== '') {
      const item = {
        'text': this.taskForm.controls.todoText.value,
        'complete': false
      };
      this.items.unshift(item);
      this.taskForm.controls.todoText.setValue('')
    }
  }

  clearComplete() {
    this.items = [];
  }

  clearItem(position) {
    this.items.splice(position, 1);
  }

  onChange(position, check) {
    this.items[position].complete = check.target.checked;
  }

}
