import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria : any = {
    nombre : '',
    descripcion : ''
  }

  categorias : any;
  alert : boolean;

  constructor( private serviceCategoria : CategoriaService) {
  
   }

  ngOnInit(): void {

    this.obtenerCategorias();
    this.alert= false;
  }
  guardarCategoria(){
    console.log( this.categoria );

    this.serviceCategoria.añadirCategoria(this.categoria).subscribe((data : any)=> {
      console.log(data);
      this.obtenerCategorias();
      this.alert= true;
    })

  }

  obtenerCategorias(){
    this.serviceCategoria.obtenerCategoria().subscribe((data : any)=>{
      console.log(data);
      this.categorias = data.datos;
    })
  }

  eliminarCategotia(id){
    console.log(id);
    this.serviceCategoria.eliminarCategoria(id).subscribe((data : any)=>{
      if( data.Ok ){
        this.obtenerCategorias();
      }
    })
  }


}
