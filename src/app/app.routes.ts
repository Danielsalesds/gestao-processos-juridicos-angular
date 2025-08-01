import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard'; 
import { App } from './app';
import { ListaProcessosComponent } from './components/lista-processos/listaProcesso'; 
import { home } from './pages/home/home';
import { PartesInteressadas } from './features/partes-interessadas/partes-interessadas';
import { Formulario } from './features/partes-interessadas/pages/formulario/formulario';
import { Listagem } from './features/partes-interessadas/pages/listagem/listagem';

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
    children: [
      { path: '', loadComponent: () => import('./features/partes-interessadas/pages/listagem/listagem').then(m => m.Listagem) },
      { path: 'novo', loadComponent: () => import('./features/partes-interessadas/pages/formulario/formulario').then(m => m.Formulario) },
      { path: 'editar/:id', loadComponent: () => import('./features/partes-interessadas/pages/formulario/formulario').then(m => m.Formulario) },
    ]
  },
  {
    path: 'datajud',
    loadComponent: () =>
      import('./features/datajud/datajud')
        .then(d => d.Datajud),
    canActivate: [authGuard],
  },
];
