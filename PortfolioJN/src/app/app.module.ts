import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './service/interceptor-service';
import { EditprofileComponent } from './components/profile/editprofile.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditexperienciaComponent } from './components/experiencia/editexperiencia.component';
import { NewexperienciaComponent } from './components/experiencia/newexperiencia.component';
import { EdithabilidadesComponent } from './components/habilidades/edithabilidades.component';
import { EditproyectoComponent } from './components/proyectos/editproyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProfileComponent,
    HeaderComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadesComponent,
    LoginComponent,
    ProyectosComponent,
    EditprofileComponent,
    EditeducacionComponent,
    NeweducacionComponent,
    EditexperienciaComponent,
    NewexperienciaComponent,
    EdithabilidadesComponent,
    EditproyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
