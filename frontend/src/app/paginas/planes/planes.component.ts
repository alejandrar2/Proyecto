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

  constructor( private planService : PlanService) { }

  ngOnInit(): void {

    this.obtenerPlanes();
  }

  guardarPlan(){
    this.planService.guardarPlan(this.plan).subscribe((res:any)=>{
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
    console.log(idPlan);

    this.planService.eliminarPlan(idPlan).subscribe( (res:any) => {

      console.log(res);

      if(res.Ok){
        this.obtenerPlanes();
      }

    } );
  }
}
