import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Professor } from '../core/models/models/professor.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfessorService {
  private apiUrl = 'http://localhost:3000/professores'; // JSON Server ou backend

  constructor(private http: HttpClient) { }

  listar(): Observable<Professor[]> {
    return this.http.get<Professor[]>(this.apiUrl);
  }

  cadastrar(professor: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.apiUrl, professor);
  }

  atualizar(professor: Professor): Observable<Professor> {
    return this.http.put<Professor>(`${this.apiUrl}/${professor.id}`, professor);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
