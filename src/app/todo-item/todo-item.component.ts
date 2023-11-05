import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Input() item: TodoItem;

  removeItem(): void {
    this.remove.emit(this.item);
  }

}
