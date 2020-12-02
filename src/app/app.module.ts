import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilesUsuarioComponent } from './Components/perfiles-usuario/perfiles-usuario.component';
import { RegistrosUsuarioComponent } from './Components/perfiles-usuario/registros-usuario/registros-usuario.component';
import { DetallesUsuariosComponent } from './Components/perfiles-usuario/detalles-usuarios/detalles-usuarios.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PanelAdministradorComponent } from './Components/panel-administrador/panel-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrosUsuarioComponent,
    PanelAdministradorComponent,
    HeaderComponent,
    FooterComponent,
    PerfilesUsuarioComponent,
    DetallesUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
