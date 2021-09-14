/*
Edad
Nombre
Color de pelo
Color de piel
Velocidad
Nacionalidad
Fuerza
Vel.Nadando

                Altura
Saludable =     Peso

*/
//this: es el contexto en  el cual nos encontramos y esta palabra es el puente
//de acceso a las propiedades del objeto que habitamos
var personaAlias = {
  nombre: "pepe", //prompt('ingresa tu nombre')
  edad: 60,
  peso: 30,
  colorDePelo: "Azul",
  colorDePiel: "Verde",
  nacionalidad: "terreste",
  //Puedo tener un objeto dentro de otro? y otro dentro de este?
  habilidades: { fuerza: 1000, velocidadKM: 300 },
  saludable: function () {
    return this.edad > this.peso ? true : false;
  },
};

// Como ver las propiedades de nuestro objeto?
console.log("fuerza:", personaAlias.fuerza);
// O
console.log("fuerza:", personaAlias["fuerza"]);
//Ojito: investigar destructuracion y spread
