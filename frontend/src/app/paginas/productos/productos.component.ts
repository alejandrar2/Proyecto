import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  empresa = JSON.parse(window.localStorage.getItem('Empresa'));
  imagen: any;
  imagenSubida: boolean;
  producto = {
    nombre: '',
    calificacion: 0,
    precio: '',
    categoria: '',
    urlImagen: ''
  }

  productos:any;
  categorias:any;
  mensaje: String;
  alert:any;
  @Input() productosData : any;
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
      this.mensaje = 'Producto agregado con exito ';
      this.alert = 'success';
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
    this.producto.calificacion = 0;
    this.producto.precio = '';
    this.producto.urlImagen = '';
    this.imagenSubida = false;

  }

  obtenerCategorias(){
    this.serviceCategoria.obtenerCategoria().subscribe((data : any)=>{
      console.log(data);
      this.categorias = data.datos;
    })
  }

  eliminarProducto(id){
    this.mensaje = '';
    console.log(id);
    this.serviceEmpresa.eliminarProducto(this.empresa._id, id).subscribe((data : any)=>{
      console.log(data);
      if( data ){
        this.obtenerProducto();
        this.mensaje = 'Eliminado con exito';
        this.alert = 'danger';

      }
    })
  }


}
