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
 
  //esta funcion se le pasa como parámetro al evento (input)
  
  nuevo:Personaje = {
    nombre:'Maestro Roshi',
    poder:1000
  }

  constructor()
 {
      
 }
  

 

 

}
