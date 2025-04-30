import { Component, OnInit } from '@angular/core';
import { Professor } from '../../core/models/professor.model';
import { ProfessorService } from '../professor.service';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html'
})
export class ProfessorListaComponent implements OnInit {
  professor: Professor[] = [];
  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.professor = this.professorService.listar();
  }
}
