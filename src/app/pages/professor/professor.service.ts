import { Injectable } from '@angular/core';
import { Aluno } from '../core/models/aluno.model';
import { mockaluno } from './mock.professor';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private professor: Professor[] = structuredClone(mockprofessor);
  listar(): Aluno[] {
    return this.professor;
  }

  adicionar(aluno: Aluno): void {
    const novoId = this.professor.length > 0
      ? Math.max(...this.professor.map(a => a.idaluno ?? 0)) + 1
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

    this.professor.push(novoAluno);
  }
}