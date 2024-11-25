import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/center/center.component').then((m) => m.CenterComponent)
    },
    {
        path: 'todos',
        loadComponent: () => import('./todos/todos.component').then((m) => m.TodosComponent)
    }
];
