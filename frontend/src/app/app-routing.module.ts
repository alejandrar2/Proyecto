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
