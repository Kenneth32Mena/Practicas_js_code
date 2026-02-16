//Reto bucles.
/* 
Imprime los nuemros del 1 al 5
Recorre una lista de colores 
Recorre las propiedades de un objeto persona
Encuentra el numero mas cercano al cuadrado de 1--
imprime los numeros pares hasta el 10, imprimiendo al menos uno.
*/

console.log("------------------------")
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("------------------------");
let list = ["Rojo", "Verde", "Azul", "Amarillo"];
for (let color of list) {
  console.log(color);
}

console.log("------------------------")
let person = { nombre: 'Maria', edad: 27, profesion: 'diseñadora' };
for (let resultado in person) {

  console.log(`${resultado}: ${person[resultado]} `)
}

let num = 1;
while (num * num <= 100) {
  num++;
}
console.log(`El numero mas cercano a 100 cuyo cuadrado es menor que 100 es: ${num}`)
console.log("------------------------")
let num_s = 2;
do {
  console.log(num_s);
  num_s += 2;
} while (num_s <= 10);