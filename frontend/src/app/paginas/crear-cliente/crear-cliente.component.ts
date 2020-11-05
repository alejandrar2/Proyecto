import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

cliente ={
  nombre : '',
  apellido :'',
  correo : '',
  contrasenia: ''
}

  constructor( private clienteService : ClienteService ) {
   }

  ngOnInit(): void {
  }
  crearCliente(){

    this.clienteService.añadircliente(this.cliente).subscribe((data:any)=>{
     console.log(data);
    } );
   // console.log(this.cliente);
  }

}
