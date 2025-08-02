import { Component, inject, OnInit } from '@angular/core';
import { ParteInteressada } from '../partes-interessadas/models/parte-interessada.model';
import { PartesService } from '../partes-interessadas/service/parteServece';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';  



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  imports:[CommonModule,]
})
export class Dashboard implements OnInit {
   private location = inject(Location);
  totalPartes = 0;
  ultimasPartes: ParteInteressada[] = [];

  constructor(private partesService: PartesService) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    const partes = this.partesService.getAll();

    // Total de registros
    this.totalPartes = partes.length;

    // Últimos 5 cadastros
    this.ultimasPartes = partes.slice(-5).reverse();
  }
  voltar() {
    this.location.back();
  }
}
