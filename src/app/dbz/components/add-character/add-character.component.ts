import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

	@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  	public newCharacter: Character = {
    	name: '',
    	power: 0
  	};

  	emitCharacter(): void{
    	console.log(this.newCharacter);

		debugger;

		if( this.newCharacter.name.length===0) return;

		this.onNewCharacter.emit(this.newCharacter);
    	console.log(this.newCharacter);

    	this.newCharacter = {name:'',power:0};
  	}

}
