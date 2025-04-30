import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorListaComponent } from './professor-lista/professor-lista.component';
import { AlunoRoutingModule } from './professor.routing';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule,
    PrimengModule,
    FormsModule
  ],
  declarations: [
    ProfessorListaComponent,
    ProfessorCadastroComponent
  ]
})
export class AlunoModule { }
