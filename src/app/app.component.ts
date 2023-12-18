import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Persona } from './shared/persona.model';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BibliaComponent } from './biblia/biblia.component';
import { HistoriasComponent } from './historias/historias.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            EncabezadoComponent,
            CuerpoComponent,
            NgbModule,
            BibliaComponent,
            HistoriasComponent,
            PiePaginaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-nogales';
  
  src: string = "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

  

  

  /* titulo = 'Hola desde typescript'; */
  esReal : boolean = true;
  nombre: string = "Samuel"
  persona: Persona = new Persona();

  mostrar(){
    console.log("desde el boton mostrar",this.persona);
  }
}
