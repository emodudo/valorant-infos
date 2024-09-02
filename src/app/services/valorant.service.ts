import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  private baseUrl: string = 'https://valorant-api.com/v1'; 

  constructor(private http: HttpClient) { }

  getAgents(): Observable<any> {
    const url = `${this.baseUrl}/agents?isPlayableCharacter=true`; 
    return this.http.get<any>(url);
  }

  getAgentById(id: string): Observable<any> {
    const url = `${this.baseUrl}/agents/${id}`; 
    return this.http.get<any>(url);
  }
  
  getMaps(): Observable<any> {
    const url = `${this.baseUrl}/maps`;  
    return this.http.get<any>(url);
  }

  getWeapons(): Observable<any> {
    const url = `${this.baseUrl}/weapons`;  
    return this.http.get<any>(url);
  }

}
