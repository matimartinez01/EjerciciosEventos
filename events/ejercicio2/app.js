const inputTexto = document.getElementById("inputTexto")
const texto = document.querySelector("div > p")
const botonVuelta = document.getElementById("botonVuelta")

inputTexto.addEventListener("input", e => {
    texto.innerHTML = inputTexto.value
})

botonVuelta.addEventListener("click", e => {
    texto.innerHTML = ""
    inputTexto.value = ""   
})