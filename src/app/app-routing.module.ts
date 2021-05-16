import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeroeDetalleComponent } from './components/heroe-detalle/heroe-detalle.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { SearcHeroeComponent } from './components/searc-heroe/searc-heroe.component';

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
    path:'heroes/:nombre',
    component:SearcHeroeComponent
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
