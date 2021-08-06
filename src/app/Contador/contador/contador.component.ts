
import {Component} from '@angular/core'



@Component({
    selector:'app-contador',
    templateUrl:'contador.component.html'
})
export class ContadorComponent {

    public title: string = 'Contador App';
    public numero: number = 0;
    public base: number = 1;
  
  
    //funciones importantes para poderlas realizar.
    sumar():void
    {
      this.numero += this.base;
    }
    restar():void{
      this.numero -= this.base;
    }
  
    aumentarBase():void
    {
      this.base+=1;
    }
  

}