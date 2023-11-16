import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from "../../../domain/todo/model/todo-item";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
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
