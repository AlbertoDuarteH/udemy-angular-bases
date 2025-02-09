import { Component, EventEmitter, Input, Output } from "@angular/core";
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
    public characterListHijo: Character[]=[{
        name:'Trunks',
        power:10
    }];
    //se inicializa con el Objeto Trunks, si es que el no recibe
    //ningun calor por medio del @Input en el componente padre
    //el componente padre es el que incluye a los componentes hijos
    //en este caso el componente padre es el main-page.component.ts
    @Output()
    public onNewIndexHijo : EventEmitter<number> = new EventEmitter();

    @Output()
    public deleteUUIDHijo : EventEmitter<string> = new EventEmitter();
    

    onDeleteCharacterHijo(index: number):void{
        console.log ("Ejecucion en el hijo");
        console.log('Personaje a eliminar', index);
        this.onNewIndexHijo.emit(index);
    }

    onDeleteByUUIDHijo(uuid?:string): void{
        //if(!id) return;
        console.log('Type of ',typeof(uuid));
        console.log('Personaje a eliminar hijo', uuid);
        this.deleteUUIDHijo.emit(uuid);
    }
}

//esto es util ya que si el padre recibe informacion o tiene datos que debe relegar a los hijos
//se puede hacer por medio de los @Input() y se puede hacer de manera dinamica