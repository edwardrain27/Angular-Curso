
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


//esto es un decorador
@NgModule({

    declarations:
    [
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule
    ],

    exports:[
        HeroeComponent,
        ListadoComponent
    ]

})
export class HeroesModule {}
//de esta manera se crea un modulo
