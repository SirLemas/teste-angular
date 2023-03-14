import { ValidarComponent } from './components/views/validar/validar.component';
import { RegistrarComponent } from './components/views/registrar/registrar.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "registros", component: HomeComponent },
  { path: ":nomecolaborador/validar/:id", component: ValidarComponent},
  { path: ":nomecolaborador/registrar", component: RegistrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
