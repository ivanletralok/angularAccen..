import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { HeroeDetalleComponent } from './components/heroe-detalle/heroe-detalle.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroeTableComponent } from './components/heroe-table/heroe-table.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    HeroeComponent,
    AboutComponent,
    HeroeDetalleComponent,
    HeroComponent,
    HeroeTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
