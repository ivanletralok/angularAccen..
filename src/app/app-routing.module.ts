import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroeDetalleComponent } from './components/heroe-detalle/heroe-detalle.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"**",
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'heroe',
    component:HeroeComponent
  },
  {
    path:'heroe/:id',
    component:HeroeDetalleComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
