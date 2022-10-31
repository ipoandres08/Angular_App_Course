import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: 10000,
    },
    {
      name: 'Vegeta',
      power: 9000,
    },
  ];
  new: Character = {
    name: '',
    power: 0,
  };
  add() {
    if (this.new.name.trim().length > 0) {
      this.characters.push(this.new);
      this.new = { name: '', power: 0 };
    }
  }
}
