import { Component, Input } from "@angular/core";
import {Character} from '../../interfaces/character';
@Component({
    selector:'app-dbz-listadoDBZ',
    standalone:false,
    templateUrl:'./listado.component.html',
    styleUrl:'./listado.component.css'
})
export class ListadoBDZComponent{

               //este es un decorador que se define para las propiedades de las clases/interfaces,
               //esto indica que yo PODRIA recibir una propeidad que PUEDE llamarse characterList
    //@Input('nompreProiedad') // Aqui se define un nombre esperado
               //
    @Input()   // aque se define el operador undefine y se queda por default
    public characterList: Character[]=[{
        name:'Trunks',
        power:10
    }];
}