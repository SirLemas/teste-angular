import { Registro } from './../home/registro.model';
import { RegistrarService } from './registrar.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  colaborador: Registro = {
    id: '',
    nome: '',
    email: '',
    cpf: '',
    celular: '',
    conhecimentos: ''
  }

  constructor(private service: RegistrarService, private router: Router) {}
  conhecimentos = new FormControl('');
  conhecimentosList: string[] = ['Git', 'React', 'PHP', 'NodeJS', 'DevOps', 'Banco de Dados', 'TypeScript'];

  create():void {
    this.service.create(this.colaborador).subscribe(resposta => {
      this.service.mensagem('Colaborador registrado com sucesso!');
      this.router.navigate(['registros']);
      console.log(resposta);
    }, err => {
      console.log(err);
      for(let i =0; i < err.error.errors.lenght; i++) {
        this.service.mensagem(err.error.errors[i]);
      }
    });
  }
}
