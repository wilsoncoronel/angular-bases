import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent{
    constructor(private dbzservice: DbzService){
    }

    get characters(): Character[]{
        return [...this.dbzservice.characters];
    }
     onDeleteCharacter(id: string): void{
        this.dbzservice.onDeletedCharacter(id);
     }
     onNewCharacter(character: Character){
        this.dbzservice.addCharacter(character);
     }


}