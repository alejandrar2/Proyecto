import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ContenidoService } from 'src/app/servicios/contenido.service';

@Component({
  selector: 'app-bloque2',
  templateUrl: './bloque2.component.html',
  styleUrls: ['./bloque2.component.css']
})
export class Bloque2Component implements OnInit {


  public Editor = ClassicEditor;
  editando: boolean = true;
  informacion: any[] = [];
  idEmpresa: string;
  idPagina: string;
  productos:any;
  galeria:any;
  carrousel:any;

  public model = {
    //editorData: '<p>{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}</p>'
    editorData: '<p></p>'

  };

  constructor(private servicioContenido: ContenidoService, private activatedRoute: ActivatedRoute , private servicioCategoria : CategoriaService) { }

  ngOnInit(): void {

    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.idPagina = this.activatedRoute.snapshot.paramMap.get('idPagina');

    this.obtenerContenido();
  }

  limpiar() {

    this.model.editorData = '';
  }

  obtenerData() {
    this.galeria = '';
    this.productos = '';
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
   // console.log('Info', this.informacion);
    this.procesarContenido();
  }

  obtenerContenido() {
    this.servicioContenido.obtenerContenido(this.idEmpresa, this.idPagina).subscribe((data: any)=> {
     // console.log(data);
      this.model.editorData = data.bloque2;
    });
  }

  actualizarBloque(){

    this.editando=false;

    let bloque = {
      bloque: this.model.editorData
    }

    this.servicioContenido.actualizarBloque2(this.idEmpresa, this.idPagina, bloque).subscribe( (data:any) => {
      //console.log(data);
      this.obtenerContenido();
      this.procesarContenido();
    });
  }

  procesarContenido(){
    for (let j = 0; j < this.informacion.length; j++) {
      
      if (this.informacion[j].tipo == 'productos') {
        this.productos = this.informacion[j];
      }

      if (this.informacion[j].tipo == 'galeria') {
        this.galeria = this.informacion[j];
      }
     
      
    }
  }
  
}