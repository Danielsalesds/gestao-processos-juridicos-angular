import { Routes } from '@angular/router';
import { authGuard } from './auth.guard'; 
import { App } from './app';
import { ListaProcessosComponent } from './components/lista-processos/listaProcesso'; 
import { home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        component: home,
    },
    {
        path: 'listar',
        component: ListaProcessosComponent,
        canActivate: [authGuard]
    },
];
