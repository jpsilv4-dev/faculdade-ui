import { Component } from '@angular/core';
import { Aluno } from '../../core/models/aluno.model';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
})
export class AlunoCadastroComponent {
  aluno: Aluno = new Aluno();

  constructor(private alunoService: AlunoService) { }

  salvar() {
    this.alunoService.adicionar(this.aluno);
    alert('Aluno cadastrado com sucesso!');
    this.aluno = new Aluno();
  }
}