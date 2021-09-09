const Preguntar = () => {
  let respuesta = prompt("Que tabla deseas ver:");

  while (respuesta !== "" && respuesta.length < 2) {
    respuesta = prompt("(la long debe ser mayor a 2) Que tabla deseas ver:");
  }

  return respuesta;
};

var tablaIngresada = Preguntar();

while ("" != tablaIngresada) {
  var tablaNumero = parseInt(tablaIngresada);

  for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + tablaNumero + " = " + i * tablaNumero);
  }

  tablaIngresada = Preguntar();
}
