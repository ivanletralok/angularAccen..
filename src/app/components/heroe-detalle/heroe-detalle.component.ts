import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeInterface } from 'src/app/domain/interface/interfaceHeroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-detalle',
  templateUrl: './heroe-detalle.component.html',
  styleUrls: ['./heroe-detalle.component.css']
})
export class HeroeDetalleComponent implements OnInit {

  heroeDetalle:HeroeInterface;

  constructor(private activatedRoute:ActivatedRoute, private heroeService:HeroesService ) {

    this.activatedRoute.params.subscribe(params =>{
      this.heroeDetalle = this.heroeService.getHeroe(params['id']);

    })
  }
  ngOnInit(): void {
  }

}
