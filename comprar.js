

const cantidadEntradas = document.getElementById('cantidadEntrada')

const botonCalcular = document.getElementById('botonCalcular')

var categoria = document.getElementById('inputState')

const totalCompra = document.getElementById('totalCompra')

const precio = 200



function resumen (){

    console.log(categoria.value)

    console.log(cantidadEntradas.value)
    

    cantidadEntradas.value

    totalCompra.innerHTML = "Total a pagar: $" + ((cantidadEntradas.value * precio) - ((categoria.value/100) * precio))

}

