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

  empresa = {
    nombre: '',
    descripcion: '',
    correo:'',
    rubro: '',
    plan:'',
    paginas: [],
    productos: [],
    imagenes: []
  }
  

  imagenNueva: String = 'Seleccionar plan';
  planes: any;
  //empresa: any;
  planSeleccionado: any = {
    nombre: '',
    precio: '',
    cantidadPaginas: '',
    cantidadProductos: ''
  };

  informacionEmpresa: any;
  logotipo: any;
  idEmpresa:any;
  imagenSubida: boolean = false;
  constructor(private serviceEmpresa: EmpresasService, private servicePlan: PlanService) { }

  ngOnInit(): void {
    this.idEmpresa = JSON.parse(window.localStorage.getItem('empresa'));
    this.actualizarInformacionEmpresa();
    this.obtenerEmpresa();


    this.ObtnerPlanes();
  }

  obtenerEmpresa(){
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((res:any)=>{
      this.empresa.nombre = res.nombre;
      this.empresa.descripcion = res.descripcion;
      this.empresa.correo = res.correo;
      this.empresa.rubro = res.rubro;
      this.empresa.plan = res.plan;
      this.logotipo = res.logotipo;
    })
  }
  
  subirImagen(e) {
    let imagen = e.target.files[0];
    //console.log('Imagen ', imagen);
    const data = new FormData();
    data.append('file', imagen);
    data.append('upload_preset', 'morgan');
    this.serviceEmpresa.guardarImagen(data).subscribe((res: any) => {

      if (res) {
        //console.log(res.url)
        this.imagenNueva = res.url;
        this.subirImagenNode();
      }
    });
  }

  actualizarInformacionEmpresa() {
    this.serviceEmpresa.obtenerEmpresa(this.idEmpresa).subscribe((data: any) => {
      if (data) {
        //console.log(data);
        this.empresa = data;
      }
    });
  }

  subirImagenNode() {
    this.serviceEmpresa.actualizarLogotipo(this.idEmpresa, this.imagenNueva).subscribe((data: any) => {
      if (data) {
        //console.log(data);
        this.actualizarInformacionEmpresa();
      }
    });
  }

  ObtnerPlanes() {
    this.servicePlan.obtenerPlanes().subscribe((data: any) => {
      if (data) {
        //console.log(data);
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

    this.serviceEmpresa.actualizarPlan(this.idEmpresa, this.planSeleccionado.nombre).subscribe((data: any) => {
      //console.log(data);
      this.actualizarInformacionEmpresa();

    });

  }
}
