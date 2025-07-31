import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard'; 
import { App } from './app';
import { ListaProcessosComponent } from './components/lista-processos/listaProcesso'; 

export const routes: Routes = [
    {
        path: '',
        component: App,
    },
    {
        path: 'lista-processos',
        component: ListaProcessosComponent,
        // se quiser proteger a rota, pode usar:
        // canActivate: [authGuard],
    },
];
