import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';
import { Professor } from '../../core/models/models/professor.model';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html'
})
export class ProfessorCadastroComponent {
  professor: Professor = { id: 0, nome: '', email: '', titulacao: '' };

  constructor(private service: ProfessorService, private router: Router) { }

  salvar() {
    this.service.cadastrar(this.professor).subscribe(() => {
      this.router.navigate(['/professor']);
    });
  }
}
