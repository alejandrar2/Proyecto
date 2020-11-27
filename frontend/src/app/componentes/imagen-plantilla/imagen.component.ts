import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-imagen-plantilla',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imagen:any;

  constructor( private serviceEmpresa : EmpresasService , private activeRoute : ActivatedRoute)  { }

  idEmpresa : any;
  urlImagen : any;
  ngOnInit(): void {

  this.idEmpresa = this.activeRoute.snapshot.paramMap.get('idEmpresa');
    this.obtenerImagenUrl();
  }
  obtenerImagenUrl(){
    this.serviceEmpresa.obtenerImagenUrl(this.idEmpresa , this.imagen.id).subscribe((res:any)=>{
      //console.log(res);
      this.urlImagen = res.imagenes[0].urlImagen
    })

  }
}
