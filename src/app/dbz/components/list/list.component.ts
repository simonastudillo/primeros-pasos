import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzService } from '../../services/dbz.service';

import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent {

	@Input()
	public characterList: Character[] = [{
		name: 'Trunks',
		power: 10
	}]

	constructor( private dbzService: DbzService){
        
    }

    onDeleteCharacter( id?:string ): void{
		if(!id) return;
        this.dbzService.deleteCharacterById( id );
    }


}
