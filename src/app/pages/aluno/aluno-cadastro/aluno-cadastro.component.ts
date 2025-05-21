import { Component } from '@angular/core';
import { Aluno } from '../../core/models/models/aluno.model';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html'
})
export class AlunoCadastroComponent {
  aluno: Aluno = { id: 0, nome: '', matricula: '', email: '' };

  constructor(private alunoService: AlunoService, private router: Router) { }

  salvar() {
    this.alunoService.salvar(this.aluno);
    this.router.navigate(['/aluno/lista']);
  }
}
