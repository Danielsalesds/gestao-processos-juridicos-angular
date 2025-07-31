import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-processos',   // nome da tag do componente
  standalone: true,                  // componente standalone, sem módulo
  templateUrl:'./listaProcesso.html',
  
})
export class ListaProcessosComponent {
    protected title = 'listar-processos-juridicos';
}
