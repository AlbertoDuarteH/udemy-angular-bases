import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MainPaigeDBZComponent } from "./pages/main-page.component";
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
        CommonModule,
        FormsModule
    ]
})
export class DBZModule{

}