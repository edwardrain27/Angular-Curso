import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent  {

  //clase principal donde se inicializan los arreglos de personaje.

 

  public personajes:Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

 
  //esta funcion se le pasa como parámetro al evento (input)
  

  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder:1000
  }

  public agregarNuevoPersonaje( argumento:Personaje)
  {
    console.log( argumento );
    this.personajes.push( argumento );
  }


  constructor( 
    private dbzService:DbzService )
    {}
  

 

 

}
