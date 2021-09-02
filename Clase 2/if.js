//dentro de la instruccion if debemos usar una cond
//Siempre tomara uno de los dos caminos JAMAS los dos
if (true) {
  //en caso de ser verdadero
  console.log("es verdadero");
} else {
  //en caso de ser falso
  console.log("No es verdadero");
}
/// Operadores en JS
//(1 == 1) retorna true dado que es el mismo valor
//(1 == '1') retorna true dado que es el mismo valor y no compara el tipo de dato
//(1 === 1) retorna true dado que es el mismo valor y mismo tipo de dato
//(1 === '1') retorna false dado que son tipos de datos distintos aunque su valor es el mismo
var sonIguales = 1 === 111111; // (==) o (===) retorna true o false

if (sonIguales) {
  console.log("son iguales");
} else {
  console.log("NO son iguales");
}

//Oprador !=
var sonDistintos = 1 !== 111111; // el resultado seria true dado que son distintos

if (sonDistintos) {
  console.log("son distintos");
} else {
  console.log("NO son distintos");
}

//Invertir el valor de mi operador booleano
var sonIguales = 1 === 2; //retorna true

if (!sonIguales) {
  console.log("NO son iguales");
}
