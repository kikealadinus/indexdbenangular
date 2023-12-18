import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../shared/db';
import { Historia } from '../shared/historias.model';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-biblia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './biblia.component.html',
  styleUrl: './biblia.component.css'
})
export class BibliaComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }
  /* GETERS */
  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  /* formUser = new FormGroup({
    'name': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]) 
  }); */

    /* haciendo uso del formbuild para las reglas de validacion */
  formUser = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', [Validators.required, Validators.email]]
  });

  procesar() {
    console.log(this.formUser.value);
  }

  ngOnInit(): void {    
  }
  src: string = "assets/img/parabolas-de-jesus.jpeg";
  
  imagenesAleatorias: string[] = [
    'assets/img/parabola2.jpg',
    'assets/img/parabola3.jpg',
    'assets/img/parabola4.JPG',
    'assets/img/parabola5.JPG',
    'assets/img/parabola6.jpg',
    
  ];

  cargarImagenAleatoria(): void {
    const indiceAleatorio = Math.floor(Math.random() * this.imagenesAleatorias.length);
    this.src = this.imagenesAleatorias[indiceAleatorio];
  }

  listaHistorias = liveQuery(() => db.historias.toArray());
  historias : Historia[] = [];

  /* constructor() {
    this.listaHistorias.subscribe(
      (historias) => {
        this.historias = historias;
        console.log(historias)},
      (error) => {console.log(error)}      
    );
  } */
}
