const boton = document.getElementById("boton")
const divCuadrado = document.getElementById("divCuadrado")
const color = document.getElementById("color")

boton.addEventListener("click", (e) => {
    if (divCuadrado.classList.contains("bg-red-200")){
        divCuadrado.classList.remove("bg-red-200", "border-red-300")
        divCuadrado.classList.add("bg-blue-200", "border-blue-300")
        color.innerHTML = "Azul"
    } else{
        divCuadrado.classList.remove("bg-blue-200", "border-blue-300")
        divCuadrado.classList.add("bg-red-200", "border-red-300")
        color.innerHTML = "Rojo"
    }
})
