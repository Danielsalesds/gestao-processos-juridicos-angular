import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataJudService {
  private baseUrl = '/api-datajud'; // corresponde ao proxy

  constructor(private http: HttpClient) {}

  getProcessosPorClasse(): Observable<any> {
    const body = {
      campos: ['classe_processual', 'quantidade'],
      filtros: { ano: 2023 }
    };

    // Não precisa enviar Authorization no header se o proxy já faz isso
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Faz POST, porque a API DataJud exige POST para consultas
    return this.http.post<any>(this.baseUrl, body, { headers });
  }
}
