import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeInterface } from 'src/app/domain/interface/interfaceHeroe';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  hero:any = [];

  constructor(private service:HeroesService, private activateRoute:ActivatedRoute) { 
    this.activateRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
