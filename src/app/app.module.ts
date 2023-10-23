import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModulo } from './counter/components/counter.modulo';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  	declarations: [
    	AppComponent
  	],
  	imports: [
    	BrowserModule,
		CounterModulo,
		HeroesModule,
		DbzModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})

export class AppModule { }
