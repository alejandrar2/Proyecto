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
respuesta:boolean;
  constructor(private serviceEmpresa : EmpresasService, private route: Router ) { }

  ngOnInit(): void {
  }


  login(){
    this.serviceEmpresa.loginEmpresas(this.empresa).subscribe ((data:any)=>{
      console.log(data)

      if( data.datos.length > 0 ){
        window.localStorage.setItem('empresa', JSON.stringify(data.datos[0]._id ));

        this.route.navigate(['/empresa/perfil'])
      }
      else{
        this.respuesta= true
      }

    })
  }



}
