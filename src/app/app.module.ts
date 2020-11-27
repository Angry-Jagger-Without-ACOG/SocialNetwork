import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PefilesUsuarioComponent } from './Components/pefiles-usuario/pefiles-usuario.component';
import { RegistrosUsuarioComponent } from './Components/registros-usuario/registros-usuario.component';
import { PanelAdministradorComponent } from './Components/panel-administrador/panel-administrador.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PefilesUsuarioComponent,
    RegistrosUsuarioComponent,
    PanelAdministradorComponent,
    HeaderComponent,
    FooterComponent
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
