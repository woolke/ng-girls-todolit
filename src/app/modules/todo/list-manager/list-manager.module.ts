import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListManagerComponent} from "./list-manager.component";
import {InputButtonUnitModule} from "../../layout/input-button-unit/input-button-unit.module";
import {TodoItemModule} from "../todo-item/todo-item.module";



@NgModule({
  declarations: [ListManagerComponent],
  exports: [ListManagerComponent],
  imports: [
    InputButtonUnitModule,
    TodoItemModule,
    CommonModule
  ]
})
export class ListManagerModule { }
