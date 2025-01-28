import { Component } from "@angular/core";
import { Character } from "../interfaces/character";


@Component({
    selector:'app-dbz-main-page',
    templateUrl:'./main-page.component.html',
    styleUrl:'./main-page.component.css',
    standalone: false,
})
export class MainPaigeDBZComponent{
    public characters: Character[] = [{
        name:'Kriling',
        power:1000
    },{
        name:'Goku',
        power:9500
    },{
        name:'Vegeta',
        power:7500
    }];
    
}