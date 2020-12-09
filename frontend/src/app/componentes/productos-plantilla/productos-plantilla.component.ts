import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { EmpresasService } from 'src/app/servicios/empresas.service';

@Component({
  selector: 'app-productos-plantilla',
  templateUrl: './productos-plantilla.component.html',
  styleUrls: ['./productos-plantilla.component.css']
})
export class ProductosPlantillaComponent implements OnInit {


  @Input() productos: any;
  productosData: any = [];
  nombreCategoria: any;
  idEmpresa: any;
  idCliente: any;
  mensaje: String;
  alert:any;

  constructor(private serviceCategoria: CategoriaService, private serviceEmpresa: EmpresasService, private activatedRoute: ActivatedRoute, private clienteService : ClienteService ) { }

  ngOnInit(): void {
    this.idEmpresa = this.activatedRoute.snapshot.paramMap.get('idEmpresa');
    this.idCliente = window.localStorage.getItem('cliente');


    console.log('Producto : ', this.productos);

    this.obtenerCategoria();
    this.obtenerProductos();

  }

  comprarProducto(producto) {
    console.log('Producto : ', producto);
    this.clienteService.añadirProductos(this.idCliente ,producto).subscribe((res:any)=>{
      console.log(res);
      this.mensaje = 'Producto comprado con exito ';
      this.alert = 'success';
    })

  }


  obtenerCategoria() {
    this.serviceCategoria.obtenerCategoriaId(this.productos.categoria).subscribe((data: any) => {
     console.log(data);
      this.nombreCategoria = data.nombre;

    });

  }

  obtenerProductos() {
    this.serviceEmpresa.obtenerProductos(this.idEmpresa).subscribe((data: any) => {
      let datos = data.datos[0].productos;

      for (let j = 0; j < datos.length; j++) {
        if (datos[j].categoria == this.nombreCategoria) {
          this.productosData.push(datos[j]);
        }
      }

      console.log(data);
    });
  }

}
