import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-empresa-perfil',
  templateUrl: './empresa-perfil.component.html',
  styleUrls: ['./empresa-perfil.component.css']
})
export class EmpresaPerfilComponent implements OnInit {
    imagen = {
    nombre: '',
    urlImagen: ''
  }

  imagenNueva: String;

  empresa: any;

imagenSubida: boolean = false;
  constructor(private serviceEmpresa: EmpresasService ) { }

  ngOnInit(): void {
    this.empresa = JSON.parse(window.localStorage.getItem('Empresa'));
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

  actualizarInformacionEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.empresa._id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.empresa = data;
        window.localStorage.setItem('Empresa', JSON.stringify(data) );
      }
    });
  }

  subirImagenNode(){
    this.serviceEmpresa.actualizarLogotipo(this.empresa._id, this.imagenNueva).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.actualizarInformacionEmpresa();
      }
    });
  }
  
}
