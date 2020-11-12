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

  empresa: any;

  constructor(private serviceEmpresa: EmpresasService) { }

  ngOnInit(): void {

    this.empresa = JSON.parse(window.localStorage.getItem('Empresa'))

  }

}
