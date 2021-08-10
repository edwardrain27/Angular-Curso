import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

    @Input() nuevo: Personaje = {
      nombre:'',
      poder: 0
    }
    //@Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter();

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
    console.log(this.nuevo );
    this.dbzService.agregarPersonajes( this.nuevo );
    //esta propiedad me emite un objeto del tipo Personaje.
    //this.onNuevoPersonaje.emit( this.nuevo );
    this.nuevo = {
      nombre:'',
      poder: 0
    }
    
  }

  constructor(private dbzService:DbzService)
  {
     
  }



}