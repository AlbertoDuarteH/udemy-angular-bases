import { Component, NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { MainPaigeDBZComponent } from "./pages/main-page.component";
import { CommonModule } from "@angular/common";
import { ListadoBDZComponent } from "./components/Listado/listado.component";
import { FormularioDBZComponent } from "./components/formulario/formulario.component";

@NgModule({
    declarations:[
        MainPaigeDBZComponent,
        ListadoBDZComponent,
        FormularioDBZComponent
    ],
    exports:[
        MainPaigeDBZComponent
    ],
    imports:[
        CommonModule
    ]
})
export class DBZModule{

}