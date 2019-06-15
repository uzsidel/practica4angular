import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  persons: Array<any>=[
    {name:'Juan',lastname:'Perez',age:'25',address:'USA',email:'test@gmail.com'},
    {name:'test',lastname:'test',age:'18',address:'MEX',email:'test@gmail.com'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
