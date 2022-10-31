import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [MainPageComponent, CharactersComponent],
  exports: [MainPageComponent],
})
export class DbzModule {}
