import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe-table',
  templateUrl: './heroe-table.component.html',
  styleUrls: ['./heroe-table.component.css']
})
export class HeroeTableComponent implements OnInit {

  @Input() dataTableImput:any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.dataTableImput);
  }

  
}
