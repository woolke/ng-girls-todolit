import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  getInputValue(event): string {
    return (event.target as HTMLInputElement).value;
  }
}
