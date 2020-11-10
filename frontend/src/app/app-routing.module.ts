import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { UsuariosComponent } from './paginas/usuarios/usuarios.component';
import { LandingPageComponent } from './paginas/landing-page/landing-page.component';
import { CrearEmpresaComponent } from './paginas/crear-empresa/crear-empresa.component';
import { CrearClienteComponent } from './paginas/crear-cliente/crear-cliente.component';
import { LoginEmpresaComponent } from './paginas/login-empresa/login-empresa.component';
import { LoginClienteComponent } from './paginas/login-cliente/login-cliente.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { EmpresasComponent } from './paginas/empresas/empresas.component';
import { PerfilEmpresaComponent } from './paginas/perfil-empresa/perfil-empresa.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { SitiiosComponent } from './paginas/sitiios/sitiios.component';
import { CategoriaComponent } from './paginas/categoria/categoria.component';
import { GaleriaComponent } from './paginas/galeria/galeria.component';
import { VideosComponent } from './paginas/videos/videos.component';
import { DocumentosComponent } from './paginas/documentos/documentos.component';
import { CompanyComponent } from './paginas/company/company.component';
import { CompanySecondComponent } from './paginas/company-second/company-second.component';

const routes: Routes = [

  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'crear-empresa', component: CrearEmpresaComponent
  },
  {
    path: 'crear-cliente', component: CrearClienteComponent
  },
  {
    path: 'login-empresa', component: LoginEmpresaComponent
  },
  {
    path: 'login-cliente', component: LoginClienteComponent
  },
  {
    path: 'admin-company', component: PerfilEmpresaComponent, children: [
      {
        path: 'productos', component: ProductosComponent
      },
      {
        path: 'sitios', component: SitiiosComponent
      },
      {
        path: 'categoria', component: CategoriaComponent
      },
      {
        path: 'galeria', component: GaleriaComponent
      },
       {
        path: 'videos', component: VideosComponent
      }, 
      {
        path: 'documentos', component: DocumentosComponent
      },
    ]
  },
  {
    path: 'admin-companies/:idEmpresa/pages/:idPagina', component: CompanyComponent
  },
  {
    path: 'companies/:idEmpresa/pagaes/:idPagina', component: CompanySecondComponent
  },


  {

    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'usuario', component: UsuariosComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'empresas', component: EmpresasComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
