import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../interfaces/todo-item";

@Component({
  selector: 'app-todo-item',
  template: `
    <div>
      <input type="checkbox"
             class="todo-checkbox"
             (click)="completeItem()"
             [checked]="item.completed"/>
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
  {{ item.title }}
        <button class="btn btn-red" (click)="removeItem()">
      remove
    </button>
</span>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  // put this method below ngOnInit
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
