import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataJudService {
  private baseUrl = '/api-datajud/api';

  constructor(private http: HttpClient) {}

  getProcessosPorClasse(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/processos/classes`);
  }
}
