import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataJudService {
  getProcessos(): Observable<any[]> {
    return of([
      { nome: 'Processo 1' },
      { nome: 'Processo 2' },
      { nome: 'Processo 3' },
      { nome: 'Processo 4' },
      { nome: 'Processo 5' },
      { nome: 'Processo 6' },
    ]);
  }
}
