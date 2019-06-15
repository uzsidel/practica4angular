import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[]=[
    {
      nombre:'juan',apellido:'mendez',edad:'25'
    },
    {
      nombre:'mario',apellido:'capo',edad:'18'
    }
  ]
  constructor() { 
    console.log("funcionando");
  }
  obtenerEquipo(){
    return this.equipo;
  }
  obtenerUno(i){
    return this.equipo[i];
  }
}
