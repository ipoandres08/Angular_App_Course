import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

    heroes: string[] = ['Spiderman', 'Thor', 'IronMan', 'Hulk', 'Capitan America']; 
    hero: string = "";

    deleteHero(){
      this.hero = this.heroes.shift() || '' ;
    }
}