import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { PerfilProfesionalComponent } from '../components/perfil-profesional/perfil-profesional.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { IdiomasComponent } from '../components/idiomas/idiomas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PerfilProfesionalComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    IdiomasComponent
  ],
  template: `
    <app-header></app-header>
    <app-perfil-profesional></app-perfil-profesional>
    <app-experiencia></app-experiencia>
    <app-educacion></app-educacion>
    <app-habilidades></app-habilidades>
    <app-idiomas></app-idiomas>
  `
})
export class AppComponent {}
