import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-plantilla',
  templateUrl: './menu-plantilla.component.html',
  styleUrls: ['./menu-plantilla.component.css']
})
export class MenuPlantillaComponent implements OnInit {

  constructor( private empresaService : EmpresasService ,private activeRoute : ActivatedRoute) { }
  
 empresa : any;
 paginas : any;
 idEmpresa : any;
 nombreEmpresa:any;
 paginaActiva: any;
 @Output() paginaSeleccionada = new EventEmitter();

  ngOnInit(): void {

    this.idEmpresa = this.activeRoute.snapshot.paramMap.get('idEmpresa');

    this.obtenterInformacionEmpresa();
  }


  obtenterInformacionEmpresa(){
    this.empresaService.obtenerEmpresa(this.idEmpresa).subscribe((res : any)=> {
      //console.log('PAginas', res.paginas);
      this.paginas = res.paginas;
      this.empresa = res;
      this.nombreEmpresa = res.nombre;
    });
  }

  actualizarPagina(idPagina){
    this.paginaSeleccionada.emit(idPagina);

  }

}
