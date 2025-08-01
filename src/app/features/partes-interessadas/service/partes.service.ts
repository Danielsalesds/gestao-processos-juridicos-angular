import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class PartesService {
  private partes = [
    { id: 1, nome: 'Fulano', tipo: 'PF', cpfCnpj: '12345678901', email: 'a@a.com' },
    { id: 2, nome: 'Empresa X', tipo: 'PJ', cpfCnpj: '11222333000100', email: 'x@x.com' },
    // ...
  ];

  getPartes() {
    return this.partes;
  }
}
