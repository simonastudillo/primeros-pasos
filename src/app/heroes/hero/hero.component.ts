import { Component } from '@angular/core';

@Component({
  	selector: 'app-heroes-hero',
  	templateUrl: './hero.component.html',
  	styleUrls: ['./hero.component.css']
})
export class HeroComponent {
	public name: 			string = 'ironman';
	public age:				number = 45;
	public seCambioNombre:	boolean = false;
	public seCambiaEdad:	boolean = false;

	get capitalizedName(): string {
		return this.name.toUpperCase();
	}

	getHeroDescription(): string {
		return `${ this.name } - ${ this.age }`

	}

	changeHero(): void{
		//throw 'Método pendiente de realizar';
		this.seCambioNombre = true;
		this.name = 'Spiderman';
	}

	changeAge(): void{
		this.seCambiaEdad = true;
		this.age = 30;
	}

	resetForm(): void {
		this.name = 'ironman';
		this.age = 45;
		this.seCambiaEdad = false;
		this.seCambioNombre = false;
	}

}
