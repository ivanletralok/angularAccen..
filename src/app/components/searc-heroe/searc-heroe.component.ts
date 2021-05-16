import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeInterface } from 'src/app/domain/interface/interfaceHeroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searc-heroe',
  templateUrl: './searc-heroe.component.html',
  styleUrls: ['./searc-heroe.component.css']
})
export class SearcHeroeComponent implements OnInit {

  @Input() heroInput2: any = {};
  hero: HeroeInterface;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.hero = this.heroeService.getHeroName(params['nombre']);

    })
  }

  ngOnInit(): void {
  }

}
