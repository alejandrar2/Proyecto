import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

plan = {
  nombre :'',
  cantidadPaginas : '',
  cantidadProductos : '',
  precio : ''

}; 
planes: any;
mensaje : any;
alert: any;

  constructor( private planService : PlanService) { }

  ngOnInit(): void {

    this.obtenerPlanes();
  }

  guardarPlan(){
    this.planService.guardarPlan(this.plan).subscribe((res:any)=>{
      this.mensaje = 'Plan agregado con exito ';
      this.alert = 'success';
      this.planes = res.datos;
      this.obtenerPlanes();
      console.log(res);
    });
    
  }
  obtenerPlanes(){

    this.planService.obtenerPlanes().subscribe( ( res:any )=>{
      console.log(res);
      this.planes = res;
    });
  }

  eliminarPlan(idPlan){
    this.planService.eliminarPlan(idPlan).subscribe( (res:any) => {
      this.mensaje = 'Eliminado con exito';
        this.alert = 'danger';
      console.log(res);

      if(res.Ok){
        this.obtenerPlanes();
      }

    } );
  }
}
