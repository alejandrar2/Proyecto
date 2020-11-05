import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { SideboardComponent } from './componentes/sideboard/sideboard.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { LandingPageComponent } from './paginas/landing-page/landing-page.component';
import { CrearClienteComponent } from './paginas/crear-cliente/crear-cliente.component';
import { CrearEmpresaComponent } from './paginas/crear-empresa/crear-empresa.component';
import { LoginEmpresaComponent } from './paginas/login-empresa/login-empresa.component';
import { LoginClienteComponent } from './paginas/login-cliente/login-cliente.component';
import { UsuarioService } from './servicios/usuario.service';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { EmpresasComponent } from './paginas/empresas/empresas.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    DashboardComponent,
    SideboardComponent,
    UsuariosComponent,
    LandingPageComponent,
    CrearClienteComponent,
    CrearEmpresaComponent,
    LoginEmpresaComponent,
    LoginClienteComponent,
    ClientesComponent,
    EmpresasComponent
    ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ UsuarioService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
