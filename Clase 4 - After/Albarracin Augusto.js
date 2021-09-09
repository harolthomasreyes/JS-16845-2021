var respuesta = prompt(
  "Desea calcular la superficie de un Cuadrado, Triangulo o Circulo ??"
);

switch (respuesta) {
  case "cuadrado":
    calcularSuperficieCuadraro();
    break;
  case "triangulo":
    calcularSuperficieTriangulo();
    break;
  case "circulo":
    calcularSuperficieCirculo();
    break;
  default:
    alert("No ingresaste nada!!!");
    break;
}

function calcularSuperficieCuadraro() {
  var base = ConvertirAnumeroSiEsPosible(prompt("ingrese base"));
  var altura = ConvertirAnumeroSiEsPosible(prompt("ingrese altura"));
  var resultado = base * altura;

  return resultado;
}

function calcularSuperficieTriangulo() {
  var base = ConvertirAnumeroSiEsPosible(prompt("ingrese base"));
  var altura = ConvertirAnumeroSiEsPosible(prompt("ingrese altura"));
  var resultado = (base * altura) / 2;
  return resultado;
}

function calcularSuperficieCirculo() {
  var radio = ConvertirAnumeroSiEsPosible(prompt("ingrese radio"));
  const pi = 3.14;
  var resultado = pi * (radio ^ 2);
  return resultado;
}

function ConvertirAnumeroSiEsPosible(pNumero) {
  const esNumero = !isNaN(pNumero);

  if (esNumero) {
    return parseInt(pNumero);
  }

  return 0;
}
