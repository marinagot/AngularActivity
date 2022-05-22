import { formatDate } from '@angular/common';

export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: string;
    private dni: string;
    private cumpleaños: Date;
    private colorFavorito: string;
    private sexo: string;

    constructor(_nombre: string, _apellidos: string, _edad: string,
        _dni: string, _cumpleaños: Date, _colorFavorito: string,
        _sexo: string){
        this.nombre = _nombre;
        this.apellidos = _apellidos;
        this.edad = _edad;
        this.dni = _dni;
        this.cumpleaños = _cumpleaños;
        this.colorFavorito = _colorFavorito;
        this.sexo = _sexo;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public getEdad(): string {
        return this.edad;
    }

    public getDNI(): string {
        return this.dni;
    }

    public getCumpleFromDate(): string {
      return formatDate(this.cumpleaños,'dd-MM-YYYY', 'en-GB');
    }

    public getCumpleFromString(): string {
      return new Date(this.cumpleaños).toISOString();
    }

    public getColorFavorito(): string {
        return this.colorFavorito;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setNombre(_nombre: string): void {
        this.nombre = _nombre;
    }

    public setApellidos(_apellidos: string): void {
        this.apellidos = _apellidos;
    }

    public setEdad(_edad: string): void {
        this.edad = _edad;
    }

    public setDNI(_dni: string): void {
        this.dni = _dni;
    }

    public setCumple(_cumpleaños: Date) {
        this.cumpleaños = _cumpleaños;
    }

    public setColorFavorito(_colorFavorito: string): void {
        this.colorFavorito = _colorFavorito;
    }

    public setSexo(_sexo: string): void {
        this.sexo = _sexo;
    }
}
