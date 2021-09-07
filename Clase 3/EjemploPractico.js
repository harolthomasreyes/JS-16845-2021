var tablaIngresada = prompt("Que tabla deseas ver:");
var tablaNumero = parseInt(tablaIngresada);

for (let i = 1; i <= 10; i++) {
  console.log(i + " * " + tablaNumero + "=" + i * tablaNumero);
}
