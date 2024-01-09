const $botonEnviar = document.getElementById("enviar")
const $divAgregar = document.getElementById("divAgregar")

function crearDiv(frase, color, font) {
    return `
    <div class="h-[300px] w-[300px] bg-[${color}] flex justify-center items-center">
    <h1 class="${font} text-4xl text-center">${frase}</h1>
    </div>
    <span class="close relative bottom-[130px] text-4xl right-[22px] bg-black text-white">X</span>
    `
}

const $valorTexto = document.getElementById("texto")
let texto = ""

const $valorColor = document.getElementById("color")
let color = ""

const $letraComun = document.getElementById("divContenedor")
let letra = ""


function crearGrafiti(){
    $valorTexto.addEventListener("input", e => {
        texto = e.target.value;
        return texto}
       
        )

    $valorColor.addEventListener("input", e => {
        color = e.target.value;
        return color
    })

    $letraComun.addEventListener("input", e => {
        letra = e.target.value
        return letra
    })
    
    $botonEnviar.addEventListener("click", (e) => {
        e.preventDefault()
        $divAgregar.innerHTML = crearDiv(texto, color, letra)
        const $close = document.querySelector(".close")
        $close.addEventListener("click", (e) => {
           $divAgregar.innerHTML = ""
        })
    })
        
}

crearGrafiti()