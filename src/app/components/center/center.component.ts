import { Component, signal } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { GreetingComponent } from "../greeting/greeting.component";

@Component({
  selector: 'app-center',
  standalone: true,
  imports: [CounterComponent, GreetingComponent],
  templateUrl: './center.component.html',
  styleUrl: './center.component.css'
})
export class CenterComponent {
  title = signal('This is our signal')
  greeting = signal('Welcome to our application that we just made in Angular')
}
