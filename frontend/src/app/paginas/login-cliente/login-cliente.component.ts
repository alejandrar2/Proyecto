import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  usuario : any = {
    correo : '',
    contrasenia : ''
  };
  respuesta :boolean;
  constructor(private seviceCliente : ClienteService ,  private route: Router) { }

  ngOnInit(): void {
  }
 login(){
   this.seviceCliente.loginCliente(this.usuario).subscribe(( res:any) => {
    console.log(res)
    if (res._id) {
     window.localStorage.setItem('cliente' , JSON.stringify(res._id ));
     this.route.navigate(['/cliente-perfil']);
    }
    else{
      this.respuesta= true
    }

    
   })
 }
}
