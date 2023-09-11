import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './addcharacter.component.html',
  styleUrls: ['./addcharacter.component.css']
})
export class AddcharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character ={
    name: '',
    power: 0
  };

  emitCharacter():void{
    console.log(this.character);
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character);
    this.character = {id:'',name:'',power: 0};
  }
}
