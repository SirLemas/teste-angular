import { ActivatedRoute, Router } from '@angular/router';
import { Registro } from './../home/registro.model';
import { ValidarService } from './validar.service';
import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent {
  conhecimentos = new FormControl('');
  conhecimentosList: string[] = ['Git', 'React', 'PHP', 'NodeJS', 'DevOps', 'Banco de Dados', 'TypeScript'];

  colaborador: Registro = {
    id: '',
    nome: '',
    email: '',
    cpf: '',
    celular: '',
    conhecimentos: '',
  }

  constructor(private service: ValidarService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit():void {
    this.colaborador.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById():void {
    this.service.findById(this.colaborador.id!).subscribe((resposta) => {
      this.colaborador.nome = resposta.nome;
      this.colaborador.email = resposta.email;
      this.colaborador.cpf = resposta.cpf;
      this.colaborador.celular = resposta.celular;
      this.colaborador.conhecimentos = resposta.conhecimentos;
    });
  }

  validar():void {
    this.service.validar(this.colaborador.id!).subscribe((resposta) => {
      console.log(resposta);
      this.service.mensagem("Cliente validado com sucesso!");
      this.router.navigate(['registros']);
    });
  }
}
