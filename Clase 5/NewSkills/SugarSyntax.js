var MayorMedianaCorta = "";
var Edad = 51;

if (Edad < 18) MayorMedianaCorta = "Corta";
else if (Edad >= 18 && Edad <= 65) MayorDeEdad = "Mediana";
else MayorDeEdad = "Mayor";

/************************Sugar Syntax - If Ternario**********************/

var Edad = 51;
var MayorMedianaCorta =
  Edad < 18 ? "Corta" : Edad >= 18 && Edad <= 65 ? "Mediana" : "Mayor";

/*************************Sugar Syntax - String interpolation***********************************/
var nombre = "Maria";
var edad = 20;
var deportista = false;
var textoDeportista = deportista ? "Sos deportista" : "No sos deportista";

var textoParaMaria = `Hola ${nombre} te damos la bienvenida a nuestras instalaciones.
Registramos que tu edad es: ${edad} notamos que : ${textoDeportista}`;

console.log(textoParaMaria);
