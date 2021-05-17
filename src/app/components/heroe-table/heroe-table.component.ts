import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroe-table',
  templateUrl: './heroe-table.component.html',
  styleUrls: ['./heroe-table.component.css']
})
export class HeroeTableComponent implements OnInit {
    mostrar = false;
    cont = 0;
    page:number;
    hero:any;

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

  delete(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Seguro que desea eliminar este HERO?',
      text: "Si aceptas no Puedes Darle marcha atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataTableImput =this.dataTableImput.filter(function (hero) {
          return hero.id !== id;
        })
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Dato eliminado con exito',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Has cancelado, dato salvado :)',
          'error'
        )
      }
    })
   
  }

  
}
