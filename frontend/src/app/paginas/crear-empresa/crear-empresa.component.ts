import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { EmpresasService } from 'src/app/servicios/empresas.service';
@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.css']
})
export class CrearEmpresaComponent implements OnInit {

  empresa = {
    nombre: '',
    rubro: '',
    correo: '',
    contrasenia: ''
  }
  
  constructor(private empresaService: EmpresasService) { }

  ngOnInit(): void {
  }

  crearEmpresa() {
    console.log(this.empresa);

    this.empresaService.añadirEmpresas(this.empresa).subscribe((data: any) => {

      console.log(data);

    });
  }



}
