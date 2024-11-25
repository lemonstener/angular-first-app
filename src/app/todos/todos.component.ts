import { Component, inject, Inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoComponent } from '../components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers: [TodosService]
})
export class TodosComponent {
  todosService = inject(TodosService);
  todos = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit() {
    this.todosService.getTodosFromAPI().pipe(catchError((error) => {
      console.log(error);
      throw(error);
    })).subscribe((todos) => this.todos.set(todos))
  };

  logTodos = () => console.log(this.todos);

  updateTodoItem(todoItem: Todo) {
    this.todos.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
