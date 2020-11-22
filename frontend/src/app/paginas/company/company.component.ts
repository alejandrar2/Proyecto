import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  idEmpresa: String;
  idPagina: String;

  empresa: any = '';
  index:any;

  constructor(private servicio: EmpresasService, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activatedRoute.snapshot.paramMap.get('idPagina');


    this.obtenerInformacionEmpresa();

    //this.obtenerPaginas();

  
  }

  obtenerInformacionEmpresa() {
    this.servicio.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      this.empresa = data;
      //console.log('Empresa ', this.empresa);
    });
  }

  obtenerContenido(){
    
  }

  obtenerPaginas() {
    this.servicio.obtenerSitios(this.idEmpresa).subscribe((data: any) => {
      //this.empresa = data;
      //console.log('Paginas', data.paginas);

      for (let i = 0; i < data.paginas.length; i++) {
        if (data.paginas[i].paginaPrincipal) {
          this.index = data.paginas[i];
          //console.log('Index',this.index);
        }        
      }

    });

  }

}
