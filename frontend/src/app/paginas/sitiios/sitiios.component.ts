import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-sitiios',
  templateUrl: './sitiios.component.html',
  styleUrls: ['./sitiios.component.css']
})
export class SitiiosComponent implements OnInit {

  idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
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

  mensaje: String;
  empresa: any;
  alert:any;
  constructor(private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {

    this.obtenerSitios();
    this.obtenerEmpresa();

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
  obtenerEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res:any)=>{
      this.empresa = res;
    })
  }

  guardarSitio() {
    //console.log(this.sitio)
    
    this.serviceEmpresa.guardarSitio(this.sitio, this.idEmpresa).subscribe((data: any) => {
      console.log(data);
      this.obtenerSitios();
      this.mensaje = 'Pagina agregado con exito ';
      this.alert = 'success';
    });
  
  }
  obtenerSitios() {
    this.serviceEmpresa.obtenerSitios(this.idEmpresa).subscribe((data: any) => {
      console.log(data);
      this.sitios = data.paginas;
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
    this.mensaje = '';
    this.serviceEmpresa.eliminarSitio(this.idEmpresa, id).subscribe((data: any) => {
      console.log(data);

      this.obtenerSitios();
      this.mensaje = 'Eliminado con exito';
        this.alert = 'danger';


    })
  }
}
