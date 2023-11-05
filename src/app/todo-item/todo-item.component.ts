import { Component, Input, OnInit } from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";

@Component({
  selector: 'app-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;

}
