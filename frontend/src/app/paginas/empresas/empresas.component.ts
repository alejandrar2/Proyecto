import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor( private serviceEmpresas : EmpresasService) { }

  empresas:any;

  ngOnInit(): void {

    this.obtenerEmpresas();

  }

  obtenerEmpresas(){

    this.serviceEmpresas.obtenerEmpresas().subscribe( ( res:any )=>{
      console.log(res);
      this.empresas = res.datos;
    });

  }

  eliminarEmpresa(idempresa){
    console.log(idempresa);

    this.serviceEmpresas.eliminarEmpresa(idempresa).subscribe( (res:any) => {

      console.log(res);

      if(res.Ok){
        this.obtenerEmpresas();
      }

    } );

  }

}
