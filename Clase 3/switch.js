var ingresoDelUsuario = "1";

var esNumero = !isNaN(ingresoDelUsuario);
console.log(esNumero);
switch (ingresoDelUsuario) {
  case 1 && esNumero:
    console.log("el caso es 1 o 2 o 3");
    break;
  default:
    console.log("No ingreso nada que podamos saber con antelacion");
    break;
}

/******************/
var ingresoDelUsuario = "1";
var esNumero = !isNaN(ingresoDelUsuario);

switch (ingresoDelUsuario) {
  case esNumero && 1:
    console.log("el caso es 1 ");
    break;
  case 2:
    console.log("el caso es 2");
    break;
  default:
    console.log("No ingreso nada que podamos saber con antelacion");
    break;
}
