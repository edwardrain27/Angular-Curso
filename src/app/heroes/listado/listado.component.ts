import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})
export class ListadoComponent{

  //definimos un arreglo de string

  public heroes: string[] = ['Spiderman', 'Ironman','Hulk', 'Thor','Goku'];
  public personajeBorrado:string = '';
  


  borrarPersonaje():void
  {
    this.personajeBorrado = this.heroes.shift() || '';
  }




}
