import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PERSONE } from './lista-persone.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persone.component.html',
  styleUrls: ['../app.component.css'],
})
export class PersonaComponent {
  persona = PERSONE;
  personaselezionata?: Persona;

  onselect(p: Persona) {
    this.personaselezionata = p;
  }
}
