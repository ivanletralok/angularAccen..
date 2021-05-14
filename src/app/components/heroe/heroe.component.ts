import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeInterface } from 'src/app/domain/interface/interfaceHeroe';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
   data = [];
   heroe :any = {};


  constructor(private service:HeroesService, private activateRoute: ActivatedRoute ) { 
    
    
  }

  ngOnInit(): void {
    this.data = this.service.getHeroes();
  }

  public detalles(id){
    this.activateRoute.params.subscribe(params =>{
      this.heroe = this.service.getHeroe(id);
      console.log(this.heroe);
    })
  
  }


}
