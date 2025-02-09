import { Component } from "@angular/core";
import { DbzService } from "../services/dbz.service";
import { Character } from "../interfaces/character";


@Component({
    selector:'app-dbz-main-page',
    templateUrl:'./main-page.component.html',
    styleUrl:'./main-page.component.css',
    standalone: false,
})
export class MainPaigeDBZComponent{

    constructor(private dbzService: DbzService){}  //esta es la forma en que se realiza la inyeccion de dependencia

    getCaracters():Character[] {
        return [...this.dbzService.carterListPadre]; //esto es para clonarlo, pasar  como nuevo objeto un clon
    }

    addNewCharater(character:Character):void{
        this.dbzService.onNewCharacterPadre(character);
    }

    deleteCharacter(id:string):void{
        this.dbzService.deleteByUUIDPadre(id);
    }
}