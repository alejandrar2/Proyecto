import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ContenidoService } from 'src/app/servicios/contenido.service';


@Component({
  selector: 'app-bloque1',
  templateUrl: './bloque1.component.html',
  styleUrls: ['./bloque1.component.css']
})
export class Bloque1Component implements OnInit {

  public Editor = ClassicEditor;
  editando: boolean = true;
  informacion: any[] = [];
  idEmpresa: string;
  idPagina: string;
  imagen:any;
  header:any;
  carrousel:any;

  public model = {
    //editorData: '<p>{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}</p>'
    editorData: '<p>{"tipo":"enlace","id":"56bcvb5545shjh65","titulo":"Descargar archivo"}</p>'

  };

  constructor(private servicioContenido: ContenidoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activatedRoute.snapshot.paramMap.get('idPagina');

    this.obtenerContenido();
  }

  limpiar() {

    this.model.editorData = '';
  }

  obtenerData() {
    this.header = '';
    this.imagen = '';
    //console.log(this.model.editorData);
    let data: any = ' ';
    let datos: any = [];
    this.informacion = [];
    this.editando = false;

    //data = this.model.editorData;
    datos = this.model.editorData.split('</p>');
    //console.log(datos);
    for (let j = 0; j < datos.length - 1; j++) {
      if (datos[j] != ' ') {
        datos[j] = datos[j].slice(3, datos[j].length);
        this.informacion.push(JSON.parse(datos[j]));
        //console.log( data[j], j)
      }
    }
    console.log(this.informacion);
    this.procesarContenido();
  }

  obtenerContenido() {
    this.servicioContenido.obtenerContenido(this.idEmpresa, this.idPagina).subscribe((data: any)=> {
      console.log(data);
      this.model.editorData = data.bloque1;
    });
  }

  actualizarBloque(){

    this.editando=false;

    let bloque = {
      bloque: this.model.editorData
    }

    this.servicioContenido.actualizarBloque1(this.idEmpresa, this.idPagina, bloque).subscribe( (data:any) => {
      console.log(data);
      this.obtenerContenido();
      this.procesarContenido();
    });
  }

  procesarContenido(){
    for (let j = 0; j < this.informacion.length; j++) {
      
      if (this.informacion[j].tipo == 'imagen') {
        this.imagen = this.informacion[j];
      }

      if (this.informacion[j].tipo == 'header') {
        this.header = this.informacion[j];
      }
      if (this.informacion[j].tipo == 'carrousel') {
        this.carrousel = this.informacion[j];
      }
      
    }
  }

}
