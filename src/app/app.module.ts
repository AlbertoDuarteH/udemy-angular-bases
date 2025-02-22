import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';
import { PokemonsModule } from './pokemons/pokemons.module';
import { DBZModule } from './dbz/dbz.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    PokemonsModule,
    DBZModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
