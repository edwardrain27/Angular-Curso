import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {

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
  public cambiarNombre( event: any)
  {
    //este evento se ejecuta cuando se escribe en la caja de texto.
    console.log( event.target.value );
    
  }

  public agregarNuevoPersonaje( argumento:Personaje)
  {
    console.log( argumento );
    this.personajes.push( argumento );
  }

  public nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder:1000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
