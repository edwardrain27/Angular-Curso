
import { Component } from "@angular/core";


//Respectivo decorador 
@Component({
    //nombre de la etiqueta en HTML5
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
//el export es para que la clase se haga visible a los distintos módulos.

    //COMO ES UNA CLASE YO PUEDO CREARME GETTERS AND SETTERS
    public nombre: string = 'Ironman';
    public edad: number = 45;

    //esto es una propiedad, no un método
    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    public obtenerNombre(): string{
        return `${ this.nombre} - ${ this.edad }`;
    }

    public cambiarNombre():void{

        this.nombre = 'Spiderman';
    }

    public cambiarEdad():void{
        console.log('hey!!!');
        this.edad = 25;
    }

}