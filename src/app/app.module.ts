import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  imports: [BrowserModule, FormsModule, HeroesModule, CounterModule, DbzModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
