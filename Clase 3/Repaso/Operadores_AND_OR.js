var fuerzaHumana = 1500;
var kgZanahorias = 2000;
var kgPapas = 850;

var puedeCargarZanahorias = fuerzaHumana >= kgZanahorias;
var puedeCargarPapas = fuerzaHumana >= kgPapas;

if (puedeCargarZanahorias || puedeCargarPapas) {
  console.log("Fuerza humana es mayor o igual a papas o Zanah");
}
