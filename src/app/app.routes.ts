import { Routes } from '@angular/router';
import { authGuard } from './auth.guard'; 
import { App } from './app';

export const routes: Routes = [
    {
        path: '',
        component: App,
    },
    {
        path: 'dashboard',
        component: App, // só para teste, usa a mesma tela
        canActivate: [authGuard], // protegida
    },
];
