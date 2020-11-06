import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  empresa = JSON.parse(window.localStorage.getItem('empresa'));
  imagen: any;
  producto = {
    nombre: '',
    descripcion: '',
    precio: '',
    categoria: '',
    urlImagen: ''

  }
  constructor(private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {
  }
  subirImagen(e) {
    this.imagen = e.target.files[0];


    console.log('Imagen ', this.imagen);
    const data = new FormData();

    data.append('file', this.imagen);
    data.append('upload_preset', 'morgan');


    this.serviceEmpresa.guardarImagen(data).subscribe((data: any) => {

      if (data) {
        console.log(data);

        this.producto.urlImagen = data.url;
      }

    });


  }

  guardarProducto() {
    this.serviceEmpresa.guardarProducto(this.producto, this.empresa._id).subscribe((data: any) => {
      console.log(data);

    });
  }



}
