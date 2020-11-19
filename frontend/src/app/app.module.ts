import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
import { SideboardClienteComponent } from './componentes/sideboard-cliente/sideboard-cliente.component';
import { PerfilEmpresaComponent } from './paginas/perfil-empresa/perfil-empresa.component';
import { NavbarClienteComponent } from './componentes/navbar-cliente/navbar-cliente.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { SitiiosComponent } from './paginas/sitiios/sitiios.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { VideosComponent } from './paginas/videos/videos.component';
import { DocumentosComponent } from './paginas/documentos/documentos.component';
import { AlertComponent } from './componentes/alert/alert.component';
import { CompanyComponent } from './paginas/company/company.component';
import { CompanySecondComponent } from './paginas/company-second/company-second.component';
import { NavbarPlantillaComponent } from './componentes/navbar-plantilla/navbar-plantilla.component';
import { FooterPlantillaComponent } from './componentes/footer-plantilla/footer-plantilla.component';
import { MenuPlantillaComponent } from './componentes/menu-plantilla/menu-plantilla.component';
import { ProductosPlantillaComponent } from './componentes/productos-plantilla/productos-plantilla.component';
import { GaleriaPlantillaComponent } from './componentes/galeria-plantilla/galeria-plantilla.component';
import { Bloque1Component } from './componentes/bloque1/bloque1.component';
import { HeaderPlantillaComponent } from './componentes/header-plantilla/header-plantilla.component';
import { EditorComponent } from './componentes/editor/editor.component';
import { ImagenComponent } from './componentes/imagen-plantilla/imagen.component';
import { EmpresaPerfilComponent } from './paginas/empresa-perfil/empresa-perfil.component';
import { ClientePerfilComponent } from './paginas/cliente-perfil/cliente-perfil.component';

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
    EmpresasComponent,
    SideboardClienteComponent,
    PerfilEmpresaComponent,
    NavbarClienteComponent,
    ProductosComponent,
    SitiiosComponent,
    CategoriaComponent,
    GaleriaComponent,
    VideosComponent,
    DocumentosComponent,
    AlertComponent,
    CompanyComponent,
    CompanySecondComponent,
    NavbarPlantillaComponent,
    FooterPlantillaComponent,
    MenuPlantillaComponent,
    ProductosPlantillaComponent,
    GaleriaPlantillaComponent,
    Bloque1Component,
    HeaderPlantillaComponent,
    EditorComponent,
    Bloque1Component,
    ImagenComponent,
    EmpresaPerfilComponent,
    ClientePerfilComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CKEditorModule,

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})

export class AppModule { }
