import { Injectable } from '@angular/core';
import { HeroeInterface } from '../domain/interface/interfaceHeroe';
import { heroesData } from '../domain/mocks/data';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private heroes: HeroeInterface[] = heroesData;


  constructor() { }

  getHeroes() {
    return this.heroes;
  }

  getHeroe(id: any) {
    let resp = this.heroes.find(heroe => heroe.id == id);
    return resp;
  }

  getHeroName(nombre:any) {
    let respons = this.heroes.find(heroe => heroe.nombre == nombre);
    return respons;

  }
}
