import { Component, NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { MainPaigeDBZComponent } from "./pages/main-page.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        MainPaigeDBZComponent
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