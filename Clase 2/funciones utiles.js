/*
    1) parseInt: convierte texto en numeros enteros
    2) parseFloat: convierte texto en numeros flotantes
    3) isNaN: retorna TRUE solo cuando no es un numero
*/
//EJEMPLOS
//1)parseInt
var numero = parseInt(1.6); //enviamos un texto
console.log("Convierte el texto en un numero entero: " + numero);
var numero = parseInt("1.6"); //enviamos un numero
console.log("Convierte el texto en un numero entero: " + numero);
//2)parseFloat
var numero = parseFloat("1.6"); //enviamos un texto
console.log("Convierte el texto en un numero entero: " + numero);
var numero = parseFloat("1.6"); //enviamos un numero
console.log("Convierte el texto en un numero entero: " + numero);
//3)isNaN
var esUnNumero = isNaN("1"); //enviamos un texto
console.log("Esto es falso dado que es un numero: " + esUnNumero);
var esUnNumero = isNaN(1); //enviamos un numero
console.log("Esto es falso dado que es un numero: " + esUnNumero);
var esUnNumero = isNaN("#");
console.log("Esto es verdadero dado que NO es un numero: " + esUnNumero);
