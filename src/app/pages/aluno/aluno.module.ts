import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/primeng.module';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoRoutingModule } from './aluno.routing';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule,
    PrimengModule,
    FormsModule
  ],
  declarations: [
    AlunoListaComponent,
    AlunoCadastroComponent
  ]
})
export class AlunoModule { }
