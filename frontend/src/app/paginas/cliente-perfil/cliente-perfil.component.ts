import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

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
  fotoPerfil: any;
  nombre: any;
  correo: any;
  sexo: any;
  idCliente: any;
  idUsuario: any;

  constructor(private serviceEmpresa: EmpresasService, private serviceCliente: ClienteService) { }

  ngOnInit(): void {

    this.idCliente = JSON.parse(window.localStorage.getItem('cliente'));
    //console.log(this.idCliente)

    this.obtenerProducto();

    this.obtenerInformacionCliente();

  }

  subirImagen(e) {
    this.imagen = e.target.files[0];
    //console.log('Imagen ', this.imagen);

    const data = new FormData();
    data.append('file', this.imagen);
    data.append('upload_preset', 'morgan');

    this.serviceEmpresa.guardarImagen(data).subscribe((data: any) => {
      if (data) {
        //console.log(data)
        this.imagenUsuario = data.url;
        this.imagenSubida = true;
      }
    });
  }

  obtenerProducto() {

    this.serviceCliente.obtenerProductosCliente(this.idCliente).subscribe((res: any) => {
      this.productos = res.compras;
      //console.log(res);
    })
  }

  obtenerInformacionCliente() {

    this.serviceCliente.obtenerCliente(this.idCliente).subscribe((res: any) => {
      this.cliente = res;
      this.fotoPerfil = res.fotoPerfil;
      this.nombre = res.nombre;
      this.correo = res.correo;
      this.sexo = res.sexo;
      // console.log(res);
    })
  }
  eliminarProducto(id) {

    console.log(id);
    this.serviceCliente.eliminarProducto(id, this.idCliente).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.obtenerProducto();
      }
    })
  }

}

