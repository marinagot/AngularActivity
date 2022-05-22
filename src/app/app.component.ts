import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Persona } from 'src/app/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FORMULARIO';
  datosUsuario: FormGroup;
  tipoSexo: string[] = ['Hombre', 'Mujer', 'Otro', 'No especificado'];
  lista: Persona[] = [];
  constructor(){
    this.datosUsuario = new FormGroup({
      nombre: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      apellidos: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      edad: new FormControl('', [ Validators.required, Validators.min(0), Validators.max(125) ]),
      dni: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]{8,8}[A-Z]$") ]),
      cumple: new FormControl('', Validators.required),
      color: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
      sexo: new FormControl('', Validators.required)
    });
  }

  subscriptionNombre: Subscription = new Subscription;
  subscriptionApellidos: Subscription = new Subscription;
  subscriptionEdad: Subscription = new Subscription;
  subscriptionDNI: Subscription = new Subscription;
  subscriptionCumple: Subscription = new Subscription;
  subscriptionColor: Subscription = new Subscription;
  subscriptionSexo: Subscription = new Subscription;


  registrar(): void {
      this.lista.push(new Persona(this.datosUsuario.get('nombre')!.value, this.datosUsuario.get('apellidos')!.value,
        this.datosUsuario.get('edad')!.value, this.datosUsuario.get('dni')!.value, this.datosUsuario.get('cumple')!.value,
        this.datosUsuario.get('color')!.value, this.datosUsuario.get('sexo')!.value));
      this.datosUsuario.reset();
  }

  modificar(indice: number, persona: Persona): void {
    var salirModificarItem = document.getElementById("salirModificar");
    salirModificarItem!.hidden = false;
      this.datosUsuario.setValue({ nombre: this.lista[indice].getNombre(), apellidos: this.lista[indice].getApellidos(),
        edad: this.lista[indice].getEdad(), dni: this.lista[indice].getDNI(), cumple: this.lista[indice].getCumpleFromString(),
        color: this.lista[indice].getColorFavorito(), sexo: this.lista[indice].getSexo()});
        this.subscriptionNombre = this.datosUsuario.get('nombre')!.valueChanges.subscribe(selectedValue => {
          this.lista[indice].setNombre(selectedValue);
        });
        this.subscriptionApellidos = this.datosUsuario.get('apellidos')!.valueChanges.subscribe(selectedValue => {
        this.lista[indice].setApellidos(selectedValue);
        });
        this.subscriptionEdad = this.datosUsuario.get('edad')!.valueChanges.subscribe(selectedValue => {
        this.lista[indice].setEdad(selectedValue);
        });
        this.subscriptionDNI = this.datosUsuario.get('dni')!.valueChanges.subscribe(selectedValue => {
          this.lista[indice].setDNI(selectedValue);
          });
        this.subscriptionCumple = this.datosUsuario.get('cumple')!.valueChanges.subscribe(selectedValue => {
        this.lista[indice].setCumple(selectedValue);
        });
        this.subscriptionColor = this.datosUsuario.get('color')!.valueChanges.subscribe(selectedValue => {
        this.lista[indice].setColorFavorito(selectedValue);
        });
        this.subscriptionSexo = this.datosUsuario.get('sexo')!.valueChanges.subscribe(selectedValue => {
        this.lista[indice].setSexo(selectedValue);
        });
  }

  eliminar(indice: number): void {
    this.lista.splice(indice, 1);
  }

  salirModificar(){
    this.subscriptionNombre.unsubscribe();
    this.subscriptionApellidos.unsubscribe();
    this.subscriptionEdad.unsubscribe();
    this.subscriptionCumple.unsubscribe();
    this.subscriptionDNI.unsubscribe();
    this.subscriptionColor.unsubscribe();
    this.subscriptionSexo.unsubscribe();
    var salirModificarItem = document.getElementById("salirModificar");
    salirModificarItem!.hidden = true;
    this.datosUsuario.reset();
  }

  ngOnInit(): void {
  }
}
