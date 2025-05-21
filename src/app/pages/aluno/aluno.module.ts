import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoListaComponent } from './aluno-lista/aluno-lista.component';
import { AlunoRoutingModule } from './aluno.routing';
import { TableModule } from 'primeng/table'; // Exemplo com PrimeNG

@NgModule({
  declarations: [AlunoCadastroComponent, AlunoListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    AlunoRoutingModule,
    TableModule
  ]
})
export class AlunoModule { }
