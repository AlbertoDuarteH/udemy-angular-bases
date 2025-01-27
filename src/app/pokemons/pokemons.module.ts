import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonComponent } from "./pokemon/components/pokemon.component";
import { PokemonListComponent } from "./pokemon-list/components/pokemon-list.component";


@NgModule({
    declarations:[
        PokemonComponent,
        PokemonListComponent
    ],
    exports:[
        PokemonComponent,
        PokemonListComponent
    ],
    imports:[
        CommonModule  //esta importacion es necesaria para los componentes de angular (Ngif, ngfor, etc)
    ]
})
export class PokemonsModule{

}