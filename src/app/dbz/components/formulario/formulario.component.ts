import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character";

@Component({
    selector:'app-dbz-formularioDBZ',
    standalone: false,
    templateUrl: './formulario.component.html',
    styleUrl: './formulario.component.css'
})
export class FormularioDBZComponent{
/*
Como parte de este ejemplo se necesita emitir el personaje que se esta creando en el formulario
y para eso se implementara de la siguiente forma, se definira una propiedad de tipo EventEmitter
para que padre pueda escuchar el evento que se esta emitiendo desde el hijo.

la notacion @Output() se utiliza para que el padre pueda escuchar el evento que se esta emitiendo
*/
    @Output()
    public newCharacterHijo: EventEmitter<Character> = new EventEmitter();
/*
Para este parte del ejericico se habla del one way data binding y del two way data binding.
Mas especificamente en el sentido de la clase el one way data binding es cuando 
se envia informacion de la clase a al html del componente y el two way data binding
es cuando se envia informacion del html del componente a la clase también.

Para esta prueba se va a definir el valor que mostraria por default el input del formulario
en su propiedad value
*/

    public character: Character ={
        name: 'Peleador',
        power: 0
    }

    emitCharacter():void{
        console.log(this.character);
        if (this.character.name.length===0) return;
        this.newCharacterHijo.emit(this.character);

        this.character = {
            name: '',
            power: 0
        }
    }
    
    clicDbz():void{
        console.log(this.character);
    }

}