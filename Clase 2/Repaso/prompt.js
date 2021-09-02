//NOTA: Siempre retorna texto

//Cuando se trabaja con texto al prompt no se lo necesita transformar
var nombre = prompt("ingresa tu nombre:");
console.log("El nombre ingresado es:" + nombre);

//Cuando usamos el prompt y debemos trabajar con numeros
//nos vemos forzados a usar las siguientes funciones
//parseInt: Para numeros enteros
//parseFloar: Para numeros flotantes
var mes = parseInt(prompt("ingresa el mes en el cual naciste:"));

if (mes === 1) {
  //Enero
  console.log("La mes ingresada es enero");
}

if (mes === 2) {
  //Enero
  console.log("La mes ingresada es febrero");
}
