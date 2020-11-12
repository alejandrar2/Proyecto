import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {

  empresa = {
    correo: '',
    contrasenia: ''
  }

  constructor(private serviceEmpresa : EmpresasService, private route: Router ) { }

  ngOnInit(): void {
  }


  login(){
    this.serviceEmpresa.loginEmpresas(this.empresa).subscribe ((data:any)=>{
      console.log(data)

      if( data.datos.length > 0 ){
        window.localStorage.setItem('Empresa', JSON.stringify(data.datos[0]));

        this.route.navigate(['/admin-company/perfil'])
      }

    })
  }



}
