import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MainPageComponent, CharactersComponent, AddCharacterComponent],
  exports: [MainPageComponent],
  providers: [DbzService],
})
export class DbzModule {}
