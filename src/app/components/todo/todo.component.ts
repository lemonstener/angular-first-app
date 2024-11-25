import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>()
  
  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
