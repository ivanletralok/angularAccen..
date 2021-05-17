import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  textoInput: String = '';
  @Input() heroSearch: any = {};

  constructor(private router: Router) { }

  ngOnInit(): void {
    }

  searchNombre() {
    if (this.textoInput != '') {

      this.router.navigate(['/heroes', this.textoInput])
      this.textoInput = '';


    } else {
      Swal.fire({
        title: 'Error!',
        text: 'El Campo no Puede Estar Vacio',
        icon: 'error',
        confirmButtonText: 'Enter'
      })
    }
  }

}
