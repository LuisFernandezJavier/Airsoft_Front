import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearTiradorComponent } from './components/crear-tirador/crear-tirador.component';
import { ListarTiradorComponent } from './components/listar-tirador/listar-tirador.component';



import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearAccesorioComponent } from './components/crear-accesorio/crear-accesorio.component';
import { ListarAccesorioComponent } from './components/listar-accesorio/listar-accesorio.component';
import { CrearArmaComponent } from './components/crear-arma/crear-arma.component';
import { ListarArmaComponent } from './components/listar-arma/listar-arma.component';
import { ListarEquipoComponent } from './components/listar-equipo/listar-equipo.component';
import { CrearEquipoComponent } from './components/crear-equipo/crear-equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTiradorComponent,
    ListarTiradorComponent,
    CrearAccesorioComponent,
    ListarAccesorioComponent,
    CrearArmaComponent,
    ListarArmaComponent,
    ListarEquipoComponent,
    CrearEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
