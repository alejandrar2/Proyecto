import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {

  usuario : any = {
    correo : '',
    contrasenia : ''
  };
  respuesta :boolean;

  constructor( private usuarioService : UsuarioService,  private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.usuarioService.loginUsuario(this.usuario).subscribe(( res:any) => {
     console.log(res)
     if (res.datos.length > 0) {
      window.localStorage.setItem('Admi' , res.datos[0]._id );
      this.route.navigate(['/dashboard/usuario']);
     }
     else{
       this.respuesta= true
     }
 
     
    })
  }
}
