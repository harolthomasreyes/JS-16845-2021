//Antes
// var tablaIngresada = prompt("Que tabla deseas ver:");
// while('' != tablaIngresada){
//     var tablaNumero = parseInt(tablaIngresada);
//     for (let i = 1; i <= 10; i++) {
//       console.log(i + " * " + tablaNumero + " = " + i * tablaNumero);
//     }
//     tablaIngresada = prompt("Que tabla deseas ver:");
// }

//Despues
const Preguntar = () => prompt("Que tabla deseas ver:");

var tablaIngresada = Preguntar();

while ("" != tablaIngresada) {
  var tablaNumero = parseInt(tablaIngresada);

  for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + tablaNumero + " = " + i * tablaNumero);
  }

  tablaIngresada = Preguntar();
}
