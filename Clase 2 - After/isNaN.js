var cantidadManzanas = prompt('ingresa la cantidad de manzanas que quieres comprar:')
var cantidadManzanasNumerico = parseInt(cantidadManzanas)
var esUnNumero = !isNaN(cantidadManzanasNumerico)

console.log('cantidadManzanas:',cantidadManzanas)
console.log('cantidadManzanasNumerico:',cantidadManzanasNumerico)
console.log('noEsUnNumero:',noEsUnNumero)

if(esUnNumero){
    console.log('Excelente compra!')
}else{
    console.log('por favor, ingrese un numero entero y no: ' + cantidadManzanas)  
}