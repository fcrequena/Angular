import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

  heroe:any = {};
  public esMarvel:boolean = true;

  constructor( private activateRoute:ActivatedRoute,
                private _heroeService:HeroesService) { 
    /* Para poder capturar el parametro que enviamos por la ruta. se necesita usar ActivateRoute */
    this.activateRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe(params['id']);
      
      if(this.heroe.casa === 'DC'){
        this.esMarvel = false
      }
  
      // if(this.heroe.casa === 'DC'){
      //   this.esMarvel = false
      // }

    })
  
  }
  
  
}
