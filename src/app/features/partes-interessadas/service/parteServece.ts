import { Injectable } from "@angular/core";
import { ParteInteressada } from "../models/parte-interessada.model";

@Injectable({ providedIn: 'root' })
export class PartesService {
  private storageKey = 'partesInteressadas';

  /** Obtém todas as partes */
  getAll(): ParteInteressada[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  /** Salva a lista inteira no localStorage */
  private salvar(partes: ParteInteressada[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(partes));
  }

  /** Adiciona uma nova parte */
  add(parte: ParteInteressada) {
    const partes = this.getAll();
    parte.id = Date.now(); // Gera ID simples
    partes.push(parte);
    this.salvar(partes);
  }

  /** Atualiza uma parte existente */
  update(parte: ParteInteressada) {
    const partes = this.getAll().map(p => p.id === parte.id ? parte : p);
    this.salvar(partes);
  }

  /** Remove uma parte pelo ID */
  delete(id: number) {
    const partes = this.getAll().filter(p => p.id !== id);
    this.salvar(partes);
  }

  /** Busca uma parte pelo ID */
  getById(id: number): ParteInteressada | undefined {
    return this.getAll().find(p => p.id === id);
  }
}
