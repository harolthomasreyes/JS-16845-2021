// y = *
// &&
// true y true = true
// true y false = false
// false y true = false
// false y false = false

// o = +
// ||
// true o true = true
// true o false = true
// false o true = true
// false o false = false

var esEsencial = true;
var trabaja = true;
var esMayordeEdad = true;
var esMenorDe65 = true;
var trabajaMenorDe65 = trabaja && esMenorDe65;

if (esEsencial || esMayordeEdad || trabajaMenorDe65) {
  console.log("Debe ser vacunado");
}
