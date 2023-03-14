import { HomeService } from './home.service';
import { Component } from '@angular/core';
import { Registro } from './registro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  registros: Registro[] = [];

  displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'acoes'];

  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      console.log(resposta);
      this.registros = resposta;
    })
  }


}
