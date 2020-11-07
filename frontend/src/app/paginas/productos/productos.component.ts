import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  empresa = JSON.parse(window.localStorage.getItem('empresa'));
  imagen: any;
  imagenSubida: boolean;
  producto = {
    nombre: '',
    calificacion: '',
    precio: '',
    categoria: '',
    urlImagen: ''
  }

  productos:any;
  categorias:any;

  constructor(private serviceEmpresa: EmpresasService, private serviceCategoria: CategoriaService) { }

  ngOnInit(): void {

    this.obtenerProducto();
    this.obtenerCategorias();
    this.imagenSubida = false;


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
        this.producto.urlImagen = data.url;
        this.imagenSubida  = true;
      }
    });
  }

  guardarProducto() {
    this.serviceEmpresa.guardarProducto(this.producto, this.empresa._id).subscribe((data: any) => {
      console.log(data);
      this.obtenerProducto();
      
    });
  }

  obtenerProducto(){
    this.serviceEmpresa.obtenerProductos(this.empresa._id).subscribe((data : any)=>{
      console.log(data);
      this.productos = data.datos[0].productos;
      this.limpiarCampos();
    })
  }

  limpiarCampos(){
    this.producto.nombre = '';
    this.producto.calificacion = '';
    this.producto.precio = '';
    this.producto.urlImagen = '';
    this.producto.calificacion = '';
    this.imagenSubida = false;

  }

  obtenerCategorias(){
    this.serviceCategoria.obtenerCategoria().subscribe((data : any)=>{
      console.log(data);
      this.categorias = data.datos;
    })
  }

  eliminarProducto(id){
    console.log(id);
    this.serviceEmpresa.eliminarProducto(this.empresa._id, id).subscribe((data : any)=>{
      console.log(data);
      if( data.respueta ){
        this.obtenerProducto();
      }
    })
  }


}
