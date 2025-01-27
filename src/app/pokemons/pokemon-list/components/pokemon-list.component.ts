import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  public pokemons:String []=['Pikachu','Squirtle','Charizard','Butterfree','Pidgeot','Primeape'];

  public deletedPkmn?:String;

  removeLastPokemon():void{
    this.deletedPkmn= this.pokemons.pop();
  }


}
