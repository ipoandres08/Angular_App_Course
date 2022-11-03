import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Input() new: Character = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {}

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }
    this.dbzService.addCharacter(this.new);
    this.new = { name: '', power: 0 };
  }
}
