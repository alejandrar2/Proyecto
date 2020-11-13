import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-sitiios',
  templateUrl: './sitiios.component.html',
  styleUrls: ['./sitiios.component.css']
})
export class SitiiosComponent implements OnInit {

  empresa = JSON.parse(window.localStorage.getItem('Empresa'));
  imagen: any;
  imagenSubida: boolean = false;
  sitios: any;
  sitio = {
    titulo: '',
    descripcion: '',
    palabrasClaves: '',
    navbar: '',
    footer: '',
    paginaPrincipal: '',
    urlImagen: ''
  }
  constructor(private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {

    this.obtenerSitios();

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
        this.sitio.urlImagen = data.url;
        this.imagenSubida = true;
      }
    });
  }

  guardarSitio() {
    //console.log(this.sitio)
    
    this.serviceEmpresa.guardarSitio(this.sitio, this.empresa._id).subscribe((data: any) => {
      console.log(data);
      this.obtenerSitios();
    });
  
  }
  obtenerSitios() {
    this.serviceEmpresa.obtenerSitios(this.empresa._id).subscribe((data: any) => {
      console.log(data);
      this.sitios = data.datos[0].paginas;
      this.limpiarCampos();
    });
  }

  limpiarCampos() {
    this.sitio.titulo = '';
    this.sitio.descripcion = '';
    this.sitio.palabrasClaves = '';
    this.sitio.navbar = '';
    this.sitio.footer = '';
    this.sitio.paginaPrincipal = '';
    this.imagenSubida = false;

  }

  eliminarSitio(id) {
    //console.log(id);
    this.serviceEmpresa.eliminarSitio(this.empresa._id, id).subscribe((data: any) => {
      console.log(data);

      this.obtenerSitios();

    })
  }
}
