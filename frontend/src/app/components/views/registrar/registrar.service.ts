import { Observable } from 'rxjs';
import { Registro } from './../home/registro.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../enviroments/enviroment';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  create(colaborador: Registro): Observable<Registro> {
    const url = `${this.baseUrl}registrar`;
    console.log(colaborador);
    return this.http.post<Registro>(url, {colaborador:colaborador});
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, "Ok", {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    });
  }
}
