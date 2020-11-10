import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-bloque1',
  templateUrl: './bloque1.component.html',
  styleUrls: ['./bloque1.component.css']
})
export class Bloque1Component implements OnInit {

  public Editor = ClassicEditor;
  editando: boolean = true;
  informacion: any[] = [];


  public model = {
    //editorData: '<p>{"tipo":"imagen","id":"5e743527beb9b00b04e8616d"}</p>'
    editorData: '<p>{"tipo":"enlace","id":"56bcvb5545shjh65","titulo":"Descargar archivo"}</p>'

  };

  constructor() { }

  ngOnInit(): void {
  }

  limpiar(){
    
    this.model.editorData = '';
  }

  obtenerData() {

    console.log(this.model.editorData);
    let data:any = ' ';
    let datos:any = [];
    this.informacion = [];

    this.editando = false;
    
    //data = this.model.editorData;
    datos = this.model.editorData.split('</p>');

    //console.log(datos);

    for (let j = 0; j < datos.length-1; j++) {

        if( datos[j] != ' '){
          datos[j] = datos[j].slice(3 , datos[j].length );
            this.informacion.push( JSON.parse( datos[j]) );
            //console.log( data[j], j)
        }
    }

   console.log(this.informacion);

  }

}
