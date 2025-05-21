import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/models/models/aluno.model';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html'
})
export class AlunoListaComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.alunos = this.alunoService.listar();
  }

  excluir(id: number) {
    this.alunoService.excluir(id);
    this.ngOnInit();
  }

  editar(aluno: Aluno) {
    this.router.navigate(['/aluno/cadastro'], { queryParams: { id: aluno.id } });
  }
}
