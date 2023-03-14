import { HomeService } from './home.service';
import { Component } from '@angular/core';
import { Registro } from './registro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registros: Registro[] = [];

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'validado', 'acoes'];

  constructor(private service: HomeService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.registros = resposta;
    })
  }

  validarColaborador(colaborador:String, id:String) {
    this.router.navigate([`${colaborador.replace(/\s/g, '')}/validar/${id}`]);
  }


}
