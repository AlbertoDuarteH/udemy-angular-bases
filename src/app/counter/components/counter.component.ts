import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter',
    standalone: false,
    template: `
        <h1>{{title}}</h1>
        <h3>Counter:{{counter}}</h3>
        <button (click)="increaseBy(1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>

    `
})

export class CounterComponent{
    public title: string = 'Counter';
    public counter: number =10;

    constructor() { }

    increaseBy(addNumber:number):void{
      this.counter+=addNumber;
    }
  
    resetCounter():void{
      this.counter=10;
    }
    

}