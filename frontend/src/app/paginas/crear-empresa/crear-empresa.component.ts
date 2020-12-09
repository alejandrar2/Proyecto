import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  

  constructor(private empresaService: EmpresasService, private routing:Router) { }

  ngOnInit(): void {
  }

  crearEmpresa() {
    console.log(this.empresa);

    this.empresaService.añadirEmpresas(this.empresa).subscribe((data: any) => {

      console.log(data);

      window.localStorage.setItem('empresa',JSON.stringify(data.dato));
      this.routing.navigate(['/empresa/productos'])
    });
  }



}
