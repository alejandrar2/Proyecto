import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-plantilla',
  templateUrl: './productos-plantilla.component.html',
  styleUrls: ['./productos-plantilla.component.css']
})
export class ProductosPlantillaComponent implements OnInit {


  @Input() productos:any[];

  constructor() { }

  ngOnInit(): void {

    console.log( 'Producto : ' , this.productos );

  }

  comprarProducto(producto){
    console.log( 'Producto : ' , producto );
  } 

}
