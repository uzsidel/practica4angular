import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PersonComponent } from './person/person.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  {path: 'body', component: BodyComponent},
  {path: 'person', component: PersonComponent},
  {path: 'equipo/:id', component: EquipoComponent},
  {path: '', component: PersonComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
