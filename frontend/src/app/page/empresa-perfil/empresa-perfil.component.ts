import { Component, OnInit } from '@angular/core';
import { EmpresasService } from 'src/app/servicios/empresas.service';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-empresa-perfil',
  templateUrl: './empresa-perfil.component.html',
  styleUrls: ['./empresa-perfil.component.css']
})
export class EmpresaPerfilComponent implements OnInit {
  imagen = {
    nombre: '',
    urlImagen: ''
  }

  imagenNueva: String = 'Seleccionar plan';
  planes: any;
  empresa: any;
  planSeleccionado: any = {
    nombre: '',
    precio: '',
    cantidadPaginas: '',
    cantidadProductos: ''
  };


  imagenSubida: boolean = false;
  constructor(private serviceEmpresa: EmpresasService, private servicePlan: PlanService) { }

  ngOnInit(): void {
    this.empresa = JSON.parse(window.localStorage.getItem('Empresa'));

    this.ObtnerPlanes();
  }
  subirImagen(e) {
    let imagen = e.target.files[0];
    console.log('Imagen ', imagen);
    const data = new FormData();
    data.append('file', imagen);
    data.append('upload_preset', 'morgan');
    this.serviceEmpresa.guardarImagen(data).subscribe((res: any) => {

      if (res) {
        console.log(res.url)
        this.imagenNueva = res.url;
        this.subirImagenNode();
      }
    });
  }

  actualizarInformacionEmpresa() {
    this.serviceEmpresa.obtenerEmpresa(this.empresa._id).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.empresa = data;
        window.localStorage.setItem('Empresa', JSON.stringify(data));
      }
    });
  }

  subirImagenNode() {
    this.serviceEmpresa.actualizarLogotipo(this.empresa._id, this.imagenNueva).subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.actualizarInformacionEmpresa();
      }
    });
  }

  ObtnerPlanes() {
    this.servicePlan.obtenerPlanes().subscribe((data: any) => {
      if (data) {
        console.log(data);
        this.planes = data;
      }
    });
  }

  selecionarPlan() {

    for (let j = 0; j < this.planes.length; j++) {

      if (this.planSeleccionado.nombre == this.planes[j].nombre) {
        this.planSeleccionado.cantidadProductos = this.planes[j].cantidadProductos;
        this.planSeleccionado.cantidadPaginas = this.planes[j].cantidadPaginas;
        this.planSeleccionado.precio = this.planes[j].precio;

      }
    }

    //console.log(this.planSeleccionado);

  }

  actualizarPlan() {

    this.serviceEmpresa.actualizarPlan(this.empresa._id, this.planSeleccionado.nombre).subscribe((data: any) => {
      //console.log(data);
      this.actualizarInformacionEmpresa();

    });

  }

}
