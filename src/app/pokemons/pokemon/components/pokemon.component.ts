import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: false,
  
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  public nombre : String= 'Bulbasaur';
  public noPokedex: number = 1;
  //public tipo1 : String = 'Planta';
  //public tipo2 : String = 'Veneno';
  public ataqueFis: String = 'Placaje'
  public ataqueSp: String = 'Látigo cepa'
  public entrenador: String = 'Red'
  
  get tipo1():string{
    return 'planta';     
  }

  get tipo2():string{
    return  `veneno`;
  }

  resumen():string{
    return `${this.nombre}-${this.noPokedex}`;
  }

  cambiarPoke():void{
    this.nombre='Squirtle';
    this.noPokedex=7;
  }

  cambiarEntrenador():void{
    this.entrenador='Blue';
  }

  reset():void{
    this.nombre='Bulbasaur';
    this.noPokedex=1;
    this.entrenador='Red';
  }
}
