import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PefilesUsuarioComponent } from './Components/pefiles-usuario/pefiles-usuario.component';
import { RegistrosUsuarioComponent } from './Components/registros-usuario/registros-usuario.component';
import { PanelAdministradorComponent } from './Components/panel-administrador/panel-administrador.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'Perf' },
{ path: 'Perf', component: PefilesUsuarioComponent},
{ path: 'Registro', component: RegistrosUsuarioComponent},
{ path: 'Admin', component: PanelAdministradorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
