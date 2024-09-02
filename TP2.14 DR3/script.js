let elementosAzuis = document.querySelectorAll(".azul");
let elementosVermelhos = document.querySelectorAll(".vermelho");

elementosAzuis.forEach(elemento => {
    elemento.setAttribute("class", "vermelho")
})

elementosVermelhos.forEach(elemento => {
    elemento.setAttribute("class", "azul")
})