export class Card {
    nombre: string;
    url: string;
    descripcion: string;

    constructor(nombre:string, url:string, descripcion:string){
        this.nombre = nombre;
        this.url = url;
        this.descripcion = descripcion;
    }
}