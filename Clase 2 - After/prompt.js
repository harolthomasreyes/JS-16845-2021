var respuestaDulceDeLeche = prompt("Te gusta el dulce de leche:");

//Solo si la respuesta es afirmativa
if (respuestaDulceDeLeche === "si") {
  console.log("le Gusta el dulce de leche");
} else {
  //Solo si la respuesta es negativa
  /**********************************************************************/
  var respuestaToleraLactosa = prompt("Toleras la lactosa?");

  if (respuestaToleraLactosa === "no") {
    console.log("Tiene sentido que no pueda comer dulce de leche");
  }
  /**********************************************************************/
}
