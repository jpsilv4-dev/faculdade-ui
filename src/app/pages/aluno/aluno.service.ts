import { Injectable } from '@angular/core';
import { Aluno } from '../core/models/aluno.model';
import { mockaluno } from './mock.aluno';
@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = structuredClone(mockaluno);
  listar(): Aluno[] {
    return this.alunos;
  }

  adicionar(aluno: Aluno): void {
    const novoId = this.alunos.length > 0
      ? Math.max(...this.alunos.map(a => a.idaluno ?? 0)) + 1
      : 1;

    const agora = new Date();

    const novoAluno: Aluno = {
      ...aluno,
      idaluno: novoId,
      datacriacao: new Date(),
      dataalteracao: new Date(),
      usucriacao: 'admin',
      usualteracao: 'admin'
    };

    this.alunos.push(novoAluno);
  }
}