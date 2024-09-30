import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'yamcha',
    power: 600
  }, {
    name: 'Krillin',
    power: 1000
  }, {
    name: 'Trunks',
    power: 10
  }]

  onDeleteCharacter(id?: string): void {
    //todo: Emitir el id del personaje
    if (!id) return;
    //console.log({ id });
    this.onDelete.emit(id);
  }
}
