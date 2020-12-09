import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  empresa:any;
  idEmpresa:any;
  imagenes:any;
  imagenNueva:any;
  mensaje:any;

  constructor( private serviceEmpresa: EmpresasService ) { }

  ngOnInit(): void {

    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));

    this.obtenerImagenes();


  }

  obtenerImagenes(){
    this.serviceEmpresa.obtenerImagenes(this.idEmpresa).subscribe( (data:any) => {
      this.imagenes = data[0].imagenes;
      console.log(this.imagenes);
    } );
  }

  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log('Imagen ', imagen);
    const data = new FormData();
    data.append('file', imagen);
    data.append('upload_preset', 'morgan');
    this.serviceEmpresa.guardarImagen(data).subscribe((res: any) => {

      if (res) {
        console.log(res.url)
        this.imagenNueva = res.url;
        this.subirImagenNode();
      }
    });
  }

  subirImagenNode(){

    let imagen = {
      nombre: 'fondo',
      urlImagen: this.imagenNueva
    }


    this.serviceEmpresa.guardarImagenNode(imagen, this.idEmpresa).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.mensaje = 'Imagen guardada con exito';
        this.obtenerImagenes();
      }
    });
  }

eliminarImagen(id){
  this.serviceEmpresa.eliminarImagen(this.idEmpresa, id).subscribe((data: any) => {
    console.log('data',  data);

    if (data) {
      this.obtenerImagenes();
      console.log('data',  data);
    }
  })
}


}
