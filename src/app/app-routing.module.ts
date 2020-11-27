import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilesUsuarioComponent } from './Components/perfiles-usuario/perfiles-usuario.component';
import { PanelAdministradorComponent } from './Components/panel-administrador/panel-administrador.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'Perf' },
{ path: 'Perf', component: PerfilesUsuarioComponent},
{ path: 'Admin', component: PanelAdministradorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
