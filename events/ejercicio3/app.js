const estatura = document.getElementById("inputEstatura")
const peso = document.getElementById("inputPeso")
const indice = document.getElementById("indiceMasa")
const calcular = document.getElementById("botonCalcular")

let estaturaFinal
let pesoFinal
function calcularMasa(estatura, peso, agregarAca){
    let a = Number(estatura) / 100
    let b = Number(peso)
    let masaCorporal = (b / (a * a)).toFixed(2)
    agregarAca.innerHTML = masaCorporal
    
}

function calculadora(){
    estatura.addEventListener("input", e => {
        estaturaFinal = estatura.value
        return estaturaFinal
    })
    console.log(estaturaFinal)
    peso.addEventListener("input", e => {
        pesoFinal = peso.value
        return pesoFinal
    })

    return calcular.addEventListener("click", e => {
        e.preventDefault()
        calcularMasa(estaturaFinal, pesoFinal, indice)
    })
}

calculadora()