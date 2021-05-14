import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-table',
  templateUrl: './heroe-table.component.html',
  styleUrls: ['./heroe-table.component.css']
})
export class HeroeTableComponent implements OnInit {
    mostrar = false;
    cont = 0;

  @Input() dataTableImput:any[] = [];

  constructor() { }
  ngOnInit(): void {
  }

  mostrarTable(){
    this.cont++;
    if(this.cont == 1){
      this.mostrar = true;

    }else{
      this.mostrar = false;
      this.cont = 0;

    }
  }
}
