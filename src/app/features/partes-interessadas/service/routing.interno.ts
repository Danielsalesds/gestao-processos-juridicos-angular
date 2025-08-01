import { Routes } from "@angular/router";
import { Listagem } from "../pages/listagem/listagem";
import { Formulario } from "../pages/formulario/formulario";

const routes: Routes = [
  { path: '', component: Listagem },
  { path: 'novo', component: Formulario },
  { path: 'editar/:id', component: Formulario },
];
