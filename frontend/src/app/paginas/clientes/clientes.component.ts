import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private serviceCliente : ClienteService ) { }

  clientes:any;

  ngOnInit(): void {

    this.obtenerCliente();

  }

  obtenerCliente(){

    this.serviceCliente.obtenerCliente().subscribe( ( res:any )=>{
      console.log(res);
      this.clientes = res.datos;
    });

  }

  eliminarCliente(idCliente){
    console.log(idCliente);

    this.serviceCliente.eliminarCliente(idCliente).subscribe( (res:any) => {

      console.log(res);

      if(res.Ok){
        this.obtenerCliente();
      }

    } );

  }




}
