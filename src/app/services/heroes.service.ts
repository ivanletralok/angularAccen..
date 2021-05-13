import { Injectable } from '@angular/core';
import { HeroeInterface } from '../domain/interface/interfaceHeroe';
import {heroesData} from '../domain/mocks/data';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private heroes:HeroeInterface[] = heroesData;


  constructor( ) { }

  getHeroes(){
    return this.heroes;
  }

  getHeroe(id:any){
    return this.heroes.find(heroe => heroe.id == id);
 
  }
}
