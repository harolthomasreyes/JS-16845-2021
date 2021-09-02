var pregunta1DulceDeLeche = prompt("Te gusta el dulce de leche:");
var pregunta2Helado = prompt("Te gusta el helado:");
var pregunta3DulceDeBatata = prompt("Te gusta el dulce de batata:");
var pregunta4Correr = prompt("Te gusta correr:");
var pregunta5Pizza = prompt("Te gusta pizza:");

var preguntasPositivas = 0;

if (pregunta1DulceDeLeche == "si") {
  preguntasPositivas = preguntasPositivas + 1;
}
if (pregunta2Helado == "si") {
  preguntasPositivas = preguntasPositivas + 1;
}
if (pregunta3DulceDeBatata == "si") {
  preguntasPositivas = preguntasPositivas + 1;
}
if (pregunta4Correr == "si") {
  preguntasPositivas = preguntasPositivas + 1;
}
if (pregunta5Pizza == "si") {
  preguntasPositivas = preguntasPositivas + 1;
}

var promedio = (preguntasPositivas * 100) / 5;

console.log("el promedio de positividad es: " + promedio);
