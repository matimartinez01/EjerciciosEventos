const $inputMoneda = document.getElementById("inputMoneda")
const $dolares = document.getElementById("dolares")
const $calcular = document.getElementById("botonCalcular")
const $inputDolar = document.getElementById("inputDolares")
const $monedaLocal = document.getElementById("monedaLocal")
const $calcularDolar = document.getElementById("botonCalcularDolar")

let cantidadMoneda
let cantidadDolar

function calculadoraDolares() {
    $inputMoneda.addEventListener("input", e => {
        cantidadMoneda = $inputMoneda.value
        return cantidadMoneda
    })
    $calcular.addEventListener("click", e => {
        e.preventDefault()
        $dolares.innerHTML = cantidadMoneda / 500
    })
}
calculadoraDolares()

function calculadoraMoneda() {
    $inputDolar.addEventListener("input", e => {
        cantidadDolar = $inputDolar.value
        return cantidadDolar
    })
    $calcularDolar.addEventListener("click", e => {
        e.preventDefault()
        $monedaLocal.innerHTML = cantidadDolar * 500
    })
}
calculadoraMoneda()