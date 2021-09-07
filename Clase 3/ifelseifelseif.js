//variable global
var acumulador = 2;

//If global: en el momento que se cumpla ALGUNA condicion,
//se ejecutara ese IF particular
if (acumulador === 2) {
  console.log("acumulador es 2");
} else if (acumulador === 3) {
  console.log("acumulador es 3");
} else if (acumulador >= 1) {
  console.log("acumulador es  mayor o igual a 1");
}

//********************************//

var eleccion = prompt("ingresa un dato:");

//Super filtro para saber si es un numero
var esNumero = !isNaN(eleccion);

if (!esNumero && eleccion == "1") {
  console.log("ingreso 1");
} else if (esNumero && eleccion === 1) {
  console.log("ingreso 1");
} else if (eleccion === "a") {
  console.log("ingreso a");
} else {
  console.log("No ingreso nada que podamos saber con antelacion");
}
