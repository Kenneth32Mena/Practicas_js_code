const nombre = 'Juan';
const saludo= 'Hello World!'; 
let numeros= [1,2,3,4,5];
let texto= ' La lluvia en Sevilla es una maravilla';
console.log(`${saludo} ${nombre}`)
console.log(`Mi nombre en mayusculas es: ${nombre.toUpperCase()} `);
console.log(`Mi nombre en minusculas es: ${nombre.toLowerCase()}`);
console.log(`El mensaje de ${saludo} tiene ${saludo.length} caracteres. `);
console.log(`el tercer numero del array con los valores ${numeros} es: ${numeros[2]}`);
console.log(`Se añade el numero que sigue en orden al final del arreglo y es ${numeros.push(6)}`);
console.log(`se encontró el patrón 
'lluvia' en el texto${texto}, por lo que el resultado es: ${texto.includes('lluvia')} `);
