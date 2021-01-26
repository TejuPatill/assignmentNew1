import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttandenceComponent } from './attandence/attandence.component';

const routes: Routes = [
  { path:'attandence' , component:AttandenceComponent },
  { path:'' , component:AttandenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
