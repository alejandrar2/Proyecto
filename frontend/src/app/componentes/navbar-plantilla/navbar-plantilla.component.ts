import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-navbar-plantilla',
  templateUrl: './navbar-plantilla.component.html',
  styleUrls: ['./navbar-plantilla.component.css']
})
export class NavbarPlantillaComponent implements OnInit {
  @Input() empresa: any = '';
  logo: any;
  nombreEmpresa: any;
  idEmpresa: any;

  constructor( private serviceEmpresa :EmpresasService, private activeRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.idEmpresa = this.activeRoute.snapshot.paramMap.get('idEmpresa');

    this.obtenerEmpresa();
;
  }

  obtenerEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res: any)=>{
      console.log(res);
      this.logo= res.logotipo;
      this.nombreEmpresa= res.nombre;
    })
  }

}
