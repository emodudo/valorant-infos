import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  private baseUrl: string = 'https://valorant-api.com/v1';  // URL base da API

  constructor(private http: HttpClient) { }

  getAgents(): Observable<any> {
    const url = `${this.baseUrl}/agents`;  // URL completa para obter os agentes
    return this.http.get<any>(url);
  }

  // Adicione mais métodos conforme necessário para outras endpoints da API
}
