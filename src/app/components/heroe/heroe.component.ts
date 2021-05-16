import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
   data = [];
   heroe :any = {};
   search:boolean = false;


  constructor(private service:HeroesService ) { 
    
    
  }

  ngOnInit(): void {
    this.data = this.service.getHeroes();
  }

  
}
