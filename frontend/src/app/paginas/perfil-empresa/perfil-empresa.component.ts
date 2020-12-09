import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  imagen = {
    nombre: '',
    urlImagen: ''
  }

  idEmpresa: any;
  empresa: any;

  constructor(private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {

    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
    this.obtenerEmpresa();
  }

  obtenerEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res:any)=>{
      this.empresa= res;
      //console.log(res.datos[0]);
    })
  }

}
