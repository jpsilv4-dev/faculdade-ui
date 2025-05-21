import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';

const routes: Routes = [
  { path: 'professor', component: ProfessorListaComponent },
  { path: 'professor/cadastro', component: ProfessorCadastroComponent },
  { path: 'professor/cadastro/:id', component: ProfessorCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
