var personaNombre = prompt("Ingresa tu nombre:");
var personaDNI = prompt("Ingresa tu DNI:");
var personaDiaReserva = prompt("Ingresa tu Dia de reserva:");

while (personaNombre != "") {
  console.log(
    "La persona: " +
      personaNombre +
      " DNI: " +
      personaDNI +
      " reservo el dia: " +
      personaDiaReserva
  );

  var personaNombre = prompt("Ingresa tu nombre:");
  var personaDNI = prompt("Ingresa tu DNI:");
  var personaDiaReserva = prompt("Ingresa tu Dia de reserva:");
}
