import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
    public characters: Character[]=[{
        id: uuid(),
        name: 'Krilin',
        power: 1000,
    },{
        id: uuid(),
        name: 'Goku',
        power: 10000,
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 200000,
    }];

    addCharacter(character: Character):void{
        const newCaharacter: Character={id: uuid(), ...character}
        this.characters.push(newCaharacter);
    }

    onDeletedCharacter(id: string){
        this.characters= this.characters.filter(character => character.id !== id);
    }
    
}