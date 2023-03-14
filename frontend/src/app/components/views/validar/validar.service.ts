import { Registro } from './../home/registro.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../enviroments/enviroment';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {

  baseUrl: String = environment.baseUrl;
  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findById(id: String): Observable<Registro> {
    const url = `${this.baseUrl}colaborador/${id}`;
    return this.http.get<Registro>(url);
  }

  validar(id: String): Observable<void> {
    const colaborador = {
      validado: 1
    };

    const url = `${this.baseUrl}validar/${id}`;
    return this.http.post<void>(url, {colaborador: colaborador});
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "Ok", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
