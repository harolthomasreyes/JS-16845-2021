var personaAlias = {
  nombre: "pepe",
  edad: 60,
  peso: 30,
  habilidades: { fuerza: 1000, velocidadKM: 300 },
  saludable: function () {
    return this.edad > this.peso ? true : false;
  },
};

class MoldeadorPersonaClase {
  constructor(pNombre, pEdad, pPeso, pFuerza, pVelocidadKM) {
    this.nombre = pNombre;
    this.edad = pEdad;
    this.peso = pPeso;
    this.habilidades = { fuerza: pFuerza, velocidadKM: pVelocidadKM };
  }

  saludable() {
    return { nombreUsuario: this.nombre };
  }
}

var personaV2 = new MoldeadorPersonaClase("pepe", 60, 30, 1000, 300);
console.log(personaV2);
