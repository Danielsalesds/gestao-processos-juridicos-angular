import { Component, OnInit } from '@angular/core';
import { DataJudService } from '../../service/datajud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.html', 
   imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
   ],
})
export class ListagemComponent implements OnInit {
  processos: any[] = [];
  filtro: string = '';

  constructor(private dataJudService: DataJudService) {}

  ngOnInit(): void {
    this.dataJudService.getProcessosPorClasse().subscribe({
      next: dados => (this.processos = dados),
      error: err => console.error('Erro ao buscar processos:', err)
    });
  }

  get processosFiltrados(): any[] {
    return this.processos.filter(p =>
      p.classeProcessual.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
}
