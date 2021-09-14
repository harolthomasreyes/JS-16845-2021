var personaAlias = {
  nombre: "pepe",
  edad: 60,
  peso: 30,
  habilidades: { fuerza: 1000, velocidadKM: 300 },
  saludable: function () {
    return this.edad > this.peso ? true : false;
  },
};

//Moldeador
function MoldeadorPersona(pNombre, pEdad, pPeso, pFuerza, pVelocidadKM) {
  this.nombre = pNombre;
  this.edad = pEdad;
  this.peso = pPeso;
  this.habilidades = { fuerza: pFuerza, velocidadKM: pVelocidadKM };

  this.saludable = function () {
    return this.edad > this.peso ? true : false;
  };
  this.datosMinimos = function () {
    return { nombreUsuario: this.nombre };
  };
}

var personaV2 = new MoldeadorPersona("pepe", 60, 30, 1000, 300);
console.log(personaV2);
