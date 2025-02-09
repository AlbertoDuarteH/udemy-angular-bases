import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character";
import {v4 as uuid} from "uuid"; //renombramiento de la funcion v4 de uuid; con esto peudo crear un universal Unique ID

/*
El decorador @Injectable y las propiedad providedIn:root indica que este objeto es un singleton
esto quiere decir que solo necesito un objeto para toda la aplicacion, y de esta forma es
como se crean servicios en Angular

Si nosotros no trabajaramos con la propiedad "providedIn:root" tendriaos que definir el servicio
en la parte "providers" en la decoracion de cada modulo
*/
@Injectable({
    providedIn:'root'
})
export class DbzService{

    //Este es el arreglo que este componente (Padre porque esta incluyendo a los)
    //otros componentes, la lista y el formulario DBZ (Hijos)
    //va a pasar por medio del @Input()
    //Esto aparece en el main-page.component.html en el tag <app-dbz-listadoDBZ> que es tag selector del hijo
    public carterListPadre: Character[] = [{
        id: uuid(),
        name:'Kriling',
        power:1000
    },{
        id: uuid(),
        name:'Goku',
        power:9500
    },{
        id: uuid(),
        name:'Vegeta',
        power:7500
    }];
    
    //Este método recibirá el el character que se esta emitiendo desde el formulario componente hijo de este
    //componente padre 
    onNewCharacterPadre(character:Character):void{
        let newCharacter:Character = {
            id:uuid(), 
            ...character
        };
        this.carterListPadre.push(newCharacter);
    }

    onNewIndexDeletePadre(index:number):void{
        console.log ("Ejecucion en el Padre");
        let deleteChar : Character[] = this.carterListPadre.splice(index, 1);
        console.log("Eliminado: ", deleteChar[0]);

    }

    //tarea, se tiene que realizar la eliminacion de loselementos del arreglo por el uuID
    deleteByUUIDPadre(uuid:string):void{
        // Filtra el array para excluir el personaje con el id especificado
        console.log("Ejecuciòn en el padre");
        this.carterListPadre = this.carterListPadre.filter(character => {
            if (character.id === uuid) {
                console.log("Eliminado: ", character); // Opcional: Mostrar el personaje eliminado
            }
            return character.id !== uuid; // Devuelve true para mantener los personajes que no coincidan con el id
        });
    }

}


