let saludo = '¡Hola Mundo!';
let nombre = 'Kenneth';
let list_a = [1, 2, 3, 4, 5];
let txt_a = ' La lluvia en Sevilla es una maravilla';
let regex = /lluvia/;
let p_found = txt_a.match(regex);
console.log(`${saludo} Soy ${nombre}`);
console.log(`Mi nombre en mayúsculas es: ${nombre.toUpperCase()}`);
console.log(`Mi nombre en minúsculas es: ${nombre.toLowerCase()}`);
console.log(`El mensaje de ${saludo} tiene  ${saludo.length} caracteres`)
console.log(`El tercer numero de la lista es ${list_a
    } es:${list_a[2]}`);
console.log(`Se añade el número que sigue ne orden al final del arreglo y es: ${list_a.push(6)}`);
console.log(`Se encontró el patrón "${p_found}" en el texto ${txt_a}, por lo que el resultado es: '${p_found}'`)