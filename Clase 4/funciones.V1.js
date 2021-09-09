//Sin parametros
function saludar() {
  console.log("Buenas noches!");
}
var saludarV2 = () => {
  console.log("Buenas noches!");
};
//Con parametros sin retorno
function saludar(pMensaje) {
  console.log(pMensaje);
}
var saludarV2 = (pMensaje) => {
  console.log(pMensaje);
};
//Con parametros y retornando
function sumar(pNumero1, pNumero2) {
  return pNumero1 + pNumero2;
}
var sumarV2 = (pNumero1, pNumero2) => pNumero1 + pNumero2;
var sumarV2 = (pNumero1, pNumero2) => {
  return pNumero1 + pNumero2;
};

/**********************************************/
