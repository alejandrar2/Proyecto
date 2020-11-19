import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.css']
})
export class ClientePerfilComponent implements OnInit {

  imagen: any;
  imagenUsuario: any;
  imagenSubida: boolean;
  productos: any;
  cliente: any;
  idCliente: any = '5fb5c4dc2a83060370c1d8a4';

  constructor(private serviceEmpresa: EmpresasService, private serviceCliente: ClienteService) { }

  ngOnInit(): void {


    this.obtenerProducto();

    this.obtenerInformacionCliente();

  }

  subirImagen(e) {
    this.imagen = e.target.files[0];
    console.log('Imagen ', this.imagen);

    const data = new FormData();
    data.append('file', this.imagen);
    data.append('upload_preset', 'morgan');

    this.serviceEmpresa.guardarImagen(data).subscribe((data: any) => {
      if (data) {
        console.log(data)
        this.imagenUsuario = data.url;
        this.imagenSubida = true;
      }
    });
  }

  obtenerProducto() {

    this.serviceCliente.obtenerProductosCliente(this.idCliente).subscribe((res: any) => {
      this.productos = res.compras;
      console.log(res);
    })
  }

  obtenerInformacionCliente() {

    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((res: any) => {
      this.cliente = res;
      console.log(res);
    })
  }

}

