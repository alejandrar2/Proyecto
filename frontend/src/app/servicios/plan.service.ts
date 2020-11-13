import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) {
  }

  url: string = 'http://localhost:8888/planes';

  obtenerPlanes() {
    return this.http.get(this.url);
  }
  obtenerPlan(idPlan) {
    return this.http.get(this.url + '/' + idPlan);
  }
  guardarPlan(plan) {
    return this.http.post(this.url, plan);
  }
  actualizarPlan(idPlan, plan) {
    return this.http.put(this.url + '/' + idPlan, plan);
  }


}



