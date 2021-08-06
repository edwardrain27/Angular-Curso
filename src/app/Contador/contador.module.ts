
import { CommonModule } from "@angular/common";
import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule
    ]
})
export class ContadorModule {}