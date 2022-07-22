import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {path:'add',component:AddComponent},
   {path:'home',component:HomeComponent},
   {path:'edit',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export let component_routes = [AddComponent,HomeComponent]
