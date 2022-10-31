import {Component} from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
    <h1>{{ name }}</h1>
    <h3>La base es: {{ base }}</h3>
    <button (click)="acum(base)">+{{base}}</button>
      <span> {{ n }} </span>
    <button (click)="acum(-base)">-{{base}}</button>
  `
})

export class CounterComponent{
  name: string = "Counter";
  n: number = 10;
  base: number = 5;
  acum(value: number) {
    this.n += value;
  }
}