import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'aluno', loadChildren: () => import('./pages/aluno/aluno.module').then(m => m.AlunoModule) },
  { path: 'professor', loadChildren: () => import('./pages/professor/professor.module').then(m => m.ProfessorModule) },
  { path: 'disciplina', loadChildren: () => import('./pages/disciplina/disciplina.module').then(m => m.DisciplinaModule) },
  { path: '', redirectTo: '/aluno/lista', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
