import { Component } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../shared/db';
import { Historia } from '../shared/historias.model';
import { ServicioTestService } from '../shared/servicio-test.service';
import { Persona } from '../shared/persona.model';

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [],
  templateUrl: './historias.component.html',
  styleUrl: './historias.component.css'
})
export class HistoriasComponent {
  listaHistorias = liveQuery(() => db.historias.toArray());
  historias : Historia[] = [];

  constructor(){
    this.listaHistorias.subscribe(
      (historia) => {
        this.historias = historia;
        console.log(historia)},
      (error) => {console.log(error)}
    );
  }

  /* persona : Persona = new Persona;
  constructor(public personaService : ServicioTestService) {
    this.persona = this.personaService.getInformacionPersona();
    console.log(this.personaService.getInformacionPersona());
  } */
}
