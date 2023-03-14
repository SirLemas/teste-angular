import { environment } from './../../../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Registro[]> {
    const url = `${this.baseUrl}registros`
    return this.http.get<Registro[]>(url)
  }
}
