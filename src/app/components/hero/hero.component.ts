import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  //lo que recibe de otro componente
  @Input() heroeInput: any = {};
  @Input() indexInput:number;

  //lo que envia a otro componente
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  mostraTabla(){

  }

  vertHeroe(){
    this.router.navigate(['/heroe', this.indexInput])
  }

  

}
