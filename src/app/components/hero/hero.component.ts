import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  //lo que recibe de otro componente
  @Input() heroeInput: any = {};
  @Input() index:number;

  //lo que envia a otro componente
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor() { }

  ngOnInit(): void {
  }

  

}
