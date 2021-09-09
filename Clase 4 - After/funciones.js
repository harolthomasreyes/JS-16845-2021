const IngresoDato = (pPregunta) => parseInt(prompt(pPregunta));
const ProcesarPorcentaje = (pTotal, pContador) => (pContador * 100) / pTotal;
const MostrarDatos = (pDato) => alert(pDato);

var totalIngresos = IngresoDato("Cual es el total?");
var cantidadIngresos = IngresoDato("Cual es la cantidad?");
var porc = ProcesarPorcentaje(totalIngresos, cantidadIngresos);

MostrarDatos(
  "el total es: " + totalIngresos,
  "la cantidad es: " + cantidadIngresos
);
MostrarDatos(porc);

/////////////////////////////////////////////////////////////////////

var totalIngresos = parseInt(prompt("Cual es el total?"));
var cantidadIngresos = parseInt(prompt("Cual es la cantidad?"));
var porc = (cantidadIngresos * 100) / totalIngresos;

alert("el total es: " + totalIngresos, "la cantidad es: " + cantidadIngresos);
alert(porc);
