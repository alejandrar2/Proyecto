import { Component, Input, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  idEmpresa:String;
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
  empresa: any;
  @Input() productosData : any;
  constructor(private serviceEmpresa: EmpresasService, private serviceCategoria: CategoriaService) { }

  ngOnInit(): void {

    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
   // console.log(this.idEmpresa);

    this.obtenerProducto();
    this.obtenerCategorias();
    this.imagenSubida = false;
    this.obtenerEmpresa();

  }

  obtenerEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res:any)=>{
      this.empresa = res;
    })
  }

  subirImagen(e) {
    this.imagen = e.target.files[0];
   // console.log('Imagen ', this.imagen);
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
    this.serviceEmpresa.guardarProducto(this.producto, this.idEmpresa).subscribe((data: any) => {
     // console.log(data);
      this.obtenerProducto();
      this.mensaje = 'Producto agregado con exito ';
      this.alert = 'success';
      this.obtenerProducto();
    });
  }

  obtenerProducto(){
    this.serviceEmpresa.obtenerProductos(this.idEmpresa).subscribe((data : any)=>{
      //console.log('Productos : ', data);
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
     // console.log(data);
      this.categorias = data.datos;
    })
  }

  eliminarProducto(id){
    this.mensaje = '';
    //console.log(id);
    this.serviceEmpresa.eliminarProducto(this.idEmpresa, id).subscribe((data : any)=>{
     // console.log(data);
      if( data ){
        this.obtenerProducto();
        this.mensaje = 'Eliminado con exito';
        this.alert = 'danger';

      }
    })
  }


}
