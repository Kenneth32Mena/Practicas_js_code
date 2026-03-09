// En este reto usare el patron de diseño con constructor, modulo y usaré para la lista de usuarios el bucle foreach.
export let list_Users = [];
export class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
    addUser() {
        list_Users.push(this.nombre);
        console.log(`Usuario ${this.nombre} ha sido agregado 😎👌`)
    }
}
export function showUsers() {
    console.log(`Lista de usuarios:`);
    list_Users.forEach(user => console.log(user));
}
