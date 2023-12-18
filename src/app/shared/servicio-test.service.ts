import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioTestService {

  constructor() { }

  getInformacionPersona(){
    let persona = new Persona;
    persona.Id = 1;
    persona.Nombre = 'Nogales';
    persona.Apellido = 'Henry';
    return persona;
  }
}
