import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';



@Injectable()
export class DbzService{

    //el servicio tendrá la información de los personajes
    //que se irán agregando
    private _personajes:Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 8500
        }
    ];
    //este método se manda de esta manera, tipo spread
    //retornarlo de esa manera, significa que creará un
    //nuevo arreglo, y será retornado sin referenciar al original

    public get personajes():Personaje[]
    {
        //javascript todo lo manda por referencia, es decir, que todo lo que haga con el get, lo podamos manipular.
        //con esto rompe la referencia a los personajes de la clase del servicio
        return [...this._personajes];
    }
    


    constructor(){}
        
    public agregarPersonajes( character:Personaje):void {
      this._personajes.push( character );
    }




}