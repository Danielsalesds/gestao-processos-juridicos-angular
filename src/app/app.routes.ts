import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard'; 
import { App } from './app';
import { ListaProcessosComponent } from './components/lista-processos/listaProcesso'; 
import { home } from './pages/home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', // redirecionar para home
    },
    {   
        path: '',
        loadComponent: ()=>
            import('./pages/home/home').then(m => m.home),
        
    },
    {
            path: 'listar',
        loadComponent: () =>
        import('./components/lista-processos/listaProcesso')
            .then(m => m.ListaProcessosComponent),
        canActivate: [authGuard],
    },
     {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard')
        .then(b => b.Dashboard),
    canActivate: [authGuard],
  },
  {
    path: 'partes-interessadas',
    loadComponent: () =>
      import('./features/partes-interessadas/partes-interessadas')
        .then(p => p.PartesInteressadas),
    canActivate: [authGuard],
  },
  {
    path: 'datajud',
    loadComponent: () =>
      import('./features/datajud/datajud')
        .then(d => d.Datajud),
    canActivate: [authGuard],
  },
];
