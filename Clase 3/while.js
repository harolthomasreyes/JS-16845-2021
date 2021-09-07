var acumulador = 0;

while (acumulador < 5) {
  acumulador++;
  console.log(acumulador);
}
/*******************/
var acumulador = 0;

while (true) {
  acumulador++;

  if (acumulador === 1) {
    continue; //Ignora el ciclo actual desde este punto
  }

  if (!(acumulador < 5)) {
    break; //Detiene el while
  }

  console.log(acumulador);
}
