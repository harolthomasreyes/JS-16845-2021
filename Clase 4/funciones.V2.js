function TomarValorNumerico(pPregunta) {
  let numero = prompt(pPregunta); //ingresado por el usuario
  let numeroNumerico = parseInt(numero);

  return numeroNumerico;
}

var numero1Numerico = TomarValorNumerico("Ingresa el numero 1:"); //ingresado por el usuario
var numero2Numerico = TomarValorNumerico("Ingresa el numero 2:"); //ingresado por el usuario

var operador = "*";

switch (operador) {
  case "+":
    console.log(numero1Numerico + numero2Numerico);
    break;
  case "-":
    console.log(numero1Numerico - numero2Numerico);
    break;
  case "*":
    console.log(numero1Numerico * numero2Numerico);
    break;
  case "/":
    console.log(numero1Numerico / numero2Numerico);
    break;
}
