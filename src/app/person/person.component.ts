import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  equipo:any[]=[];
  constructor(private _servicio: EquipoService) {
    this.equipo= _servicio.obtenerEquipo();
   }

  ngOnInit() {
  }

}
