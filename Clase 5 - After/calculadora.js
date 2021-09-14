class LogicoAritmetico {
  constructor() {}

  suma(n1, n2) {
    return n1 + n2;
  }
  resta(n1, n2) {
    return n1 - n2;
  }
  mult(n1, n2) {
    return n1 * n2;
  }
  div(n1, n2) {
    return n1 / n2;
  }
}
var calculadora = new LogicoAritmetico();
console.log(calculadora.suma(12, 9));
console.log(calculadora.resta(12, 9));
console.log(calculadora.mult(12, 9));
console.log(calculadora.div(12, 9));
