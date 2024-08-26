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

  getAgentById(id: string): Observable<any> {
    const url = `${this.baseUrl}/agents/${id}`;  // URL completa para obter um agente específico pelo ID
    return this.http.get<any>(url);
  }
  
  getMaps(): Observable<any> {
    const url = `${this.baseUrl}/maps`;  
    return this.http.get<any>(url);
  }

  getMapById(id: string): Observable<any> {
    const url = `${this.baseUrl}/maps/${id}`;  // URL completa para obter um agente específico pelo ID
    return this.http.get<any>(url);
  }
}
