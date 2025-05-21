import { Injectable } from '@angular/core';
import { Aluno } from '../core/models/models/aluno.model';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private alunos: Aluno[] = [];

  listar(): Aluno[] {
    return this.alunos;
  }

  salvar(aluno: Aluno): void {
    if (aluno.id) {
      const index = this.alunos.findIndex(a => a.id === aluno.id);
      this.alunos[index] = aluno;
    } else {
      aluno.id = this.alunos.length + 1;
      this.alunos.push(aluno);
    }
  }

  excluir(id: number): void {
    this.alunos = this.alunos.filter(a => a.id !== id);
  }

  buscarPorId(id: number): Aluno | undefined {
    return this.alunos.find(a => a.id === id);
  }
}
