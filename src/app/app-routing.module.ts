import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAccesorioComponent } from './components/crear-accesorio/crear-accesorio.component';
import { CrearArmaComponent } from './components/crear-arma/crear-arma.component';
import { CrearTiradorComponent } from './components/crear-tirador/crear-tirador.component';
import { ListarAccesorioComponent } from './components/listar-accesorio/listar-accesorio.component';
import { ListarArmaComponent } from './components/listar-arma/listar-arma.component';
import { ListarTiradorComponent } from './components/listar-tirador/listar-tirador.component';

const routes: Routes = [
  { path: '', component: ListarTiradorComponent },
  { path: 'crear-tirador', component: CrearTiradorComponent },
  { path: 'editar-tirador/:_codArma', component: CrearTiradorComponent },

  { path: 'listar-accesorio', component: ListarAccesorioComponent },
  { path: 'crear-accesorio', component: CrearAccesorioComponent },
  { path: 'editar-accesorio/:_idAccesorio', component: CrearAccesorioComponent },

  { path: 'listar-arma', component: ListarArmaComponent },
  { path: 'crear-arma', component: CrearArmaComponent },
  { path: 'editar-arma/:_codArma', component: CrearArmaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
