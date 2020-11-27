
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-galeria-plantilla',
  templateUrl: './galeria-plantilla.component.html',
  styleUrls: ['./galeria-plantilla.component.css']
})
export class GaleriaPlantillaComponent implements OnInit {

  @Input() galeria: any;
  galeriaData: any [] = [];
  idEmpresa: any;


  constructor( private EmpresaService : EmpresasService , private activatedRoute: ActivatedRoute ) { }



  ngOnInit(): void {
    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');

    this.otenerImagenes();
  }

otenerImagenes(){

  for (let i = 0; i < this.galeria.imagenes.length; i++) {
    this.EmpresaService.obtenerImagenUrl(this.idEmpresa , this.galeria.imagenes[i]).subscribe((res:any) =>{
      this.galeriaData.push(res.imagenes[0]);
      console.log(res.imagenes[0]);
    });
  }
  
}

}
