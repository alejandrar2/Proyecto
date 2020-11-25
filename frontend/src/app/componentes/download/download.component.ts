import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  idEmpresa: string;
  imagen: any;
@Input() download: any;
  constructor(private EmpresaService: EmpresasService ,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');

    this.obtenerImagen();
  }
obtenerImagen(){
  this.EmpresaService.obtenerImagenUrl(this.idEmpresa, this.download.id).subscribe((res:any)=>{
    this.imagen = res.imagenes[0];
    console.log(res.imagenes[0]);
  })
}

}
