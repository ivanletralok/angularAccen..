import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { HeroeInterface } from 'src/app/domain/interface/interfaceHeroe';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-searc-heroe',
  templateUrl: './searc-heroe.component.html',
  styleUrls: ['./searc-heroe.component.css']
})
export class SearcHeroeComponent implements OnInit {

  hero: HeroeInterface;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService, private router:Router) {
    this.activatedRoute.params.subscribe(params => {
        this.hero = this.heroeService.getHeroName(params['nombre']);
        if(this.hero == null){
            Swal.fire("Dato no localizado");
            this.router.navigate(['heroe']);
        }

    })
  }

  ngOnInit(): void {
  }

}
