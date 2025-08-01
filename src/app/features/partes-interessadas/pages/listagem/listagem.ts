import { Component, OnInit } from '@angular/core';
import { PartesService } from '../../service/parteServece';
import { ParteInteressada } from '../../models/parte-interessada.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.html',
   imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class Listagem implements OnInit {
  todasPartes: ParteInteressada[] = [];
  filtroNome = '';
  filtroTipo = '';
  paginaAtual = 1;
  itensPorPagina = 5;

  constructor(private partesService: PartesService, private router: Router) {}

  ngOnInit(): void {
    this.carregarPartes();
  }

  carregarPartes() {
    this.todasPartes = this.partesService.getAll();
  }

  get partesFiltradas(): ParteInteressada[] {
    let partes = this.todasPartes;

    if (this.filtroNome) {
      partes = partes.filter(p =>
        p.nome.toLowerCase().includes(this.filtroNome.toLowerCase())
      );
    }

    if (this.filtroTipo) {
      partes = partes.filter(p => p.tipo === this.filtroTipo);
    }

    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;

    return partes.slice(inicio, fim);
  }

  get totalPaginas(): number {
    const total = this.todasPartes.filter(p =>
      p.nome.toLowerCase().includes(this.filtroNome.toLowerCase()) &&
      (this.filtroTipo ? p.tipo === this.filtroTipo : true)
    ).length;
    return Math.ceil(total / this.itensPorPagina);
  }

  editar(parte: ParteInteressada) {
    this.router.navigate(['/partes-interessadas/editar', parte.id]);
  }

  remover(id: number) {
    this.partesService.delete(id);
    this.carregarPartes();
  }

  mudarPagina(delta: number) {
    this.paginaAtual += delta;
  }
}
