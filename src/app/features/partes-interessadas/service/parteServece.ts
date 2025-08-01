import { Injectable } from "@angular/core";
import { ParteInteressada } from "../models/parte-interessada.model";

@Injectable({ providedIn: 'root' })
export class PartesService {
  private partes: ParteInteressada[] = [];

  getAll(): ParteInteressada[] {
    return this.partes;
  }

  add(parte: ParteInteressada) {
    parte.id = Date.now(); // ID simples
    this.partes.push(parte);
  }

  update(parte: ParteInteressada) {
    const index = this.partes.findIndex(p => p.id === parte.id);
    if (index > -1) this.partes[index] = parte;
  }

  delete(id: number) {
    this.partes = this.partes.filter(p => p.id !== id);
  }

  getById(id: number): ParteInteressada | undefined {
    return this.partes.find(p => p.id === id);
  }
}
