import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 10000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 7000
  },
  {
    id: uuid(),
    name: 'Broly',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Baby',
    power: 900
  },
  ]

  addCharacter(character: Character): void {
    // console.log('main page');
    // console.log(character);
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }
    const newCharacter: Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id: number): void {
  //   this.characters.splice(id, 1);
  // }
  deleteCharacterById(id: string): void {
    this.characters =
      this.characters.filter(
        character => character.id !== id
      );
  }
}
