import { Component, OnInit } from '@angular/core';


interface Personaje{
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent implements OnInit {


  public nuevo:Personaje = {
    nombre: '',
    poder: 0,
  }

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

  public agregar( ) 
  {
    //este evento se activa cuando se da al submit del formulario. Es decir, en el botón.
    //a la vez prevee el refresco de la página, de tal manera que evita el refresco.
    //trim() elimina los espacios en blanco.
    if ( this.nuevo.nombre.trim().length === 0)
    {
      return;
    }
    //agrego al personaje 
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre:'',
      poder: 0
    }
    
    
    console.log( this.nuevo );
    
  }

  //esta funcion se le pasa como parámetro al evento (input)
  public cambiarNombre( event: any)
  {
    //este evento se ejecuta cuando se escribe en la caja de texto.
    console.log( event.target.value );
    console.log(this.nuevo.nombre);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
