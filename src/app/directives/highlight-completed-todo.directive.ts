import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false)
  el = inject(ElementRef);
  constructor() { }

  stylesEffect = effect(() => {
    if(this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = '#777';
      this.el.nativeElement.style.textDecoration = 'line-through'
    }
  })
}
