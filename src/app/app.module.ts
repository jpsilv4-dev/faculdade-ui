import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CoreModule } from './pages/core/core.module';
import { DisciplinaModule } from './pages/disciplina/disciplina.module';
import { PrimengModule } from './primeng.module';
import { AlunoModule } from './pages/aluno/aluno.module';
import { ProfessorModule } from './pages/professor/professor.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //CoreModule,
    AppRoutingModule,
    PrimengModule,
    DisciplinaModule,
    NgxSpinnerModule,
    AlunoModule,
    ProfessorModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
