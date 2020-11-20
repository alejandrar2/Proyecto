import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  cliente = {
    nombre: '',
    apellido: '',
    sexo: '',
    correo: '',
    contrasenia: ''
  }

  constructor(private clienteService: ClienteService , private route: Router) {
  }

  ngOnInit(): void {
  }
  crearCliente() {
    this.clienteService.añadircliente(this.cliente).subscribe((res: any) => {
      console.log(res);

      if (res.respuesta) {
       window.localStorage.setItem('cliente', res.dato._id);
       this.route.navigate(['/cliente-perfil']);
      }

      
    
    });
    



  }

}
