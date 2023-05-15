import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditprofileComponent } from './components/profile/editprofile.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';
import { EdithabilidadesComponent } from './components/habilidades/edithabilidades.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewexperienciaComponent},
  {path: 'editexp/:id', component: EditexperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'editperfil/:id', component: EditprofileComponent},
  {path: 'editproyecto/:id', component: EditproyectoComponent},
  {path: 'edithys/:id', component: EdithabilidadesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
