import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Professor } from '../../core/models/models/professor.model';

@Component({
  selector: 'app-professor-lista',
  templateUrl: './professor-lista.component.html'
})
export class ProfessorListaComponent implements OnInit {
  professores: Professor[] = [];

  constructor(private service: ProfessorService) { }

  ngOnInit() {
    this.service.listar().subscribe(dados => {
      this.professores = dados;
    });
  }
}
