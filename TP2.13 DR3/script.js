let divModal = document.getElementById("modal")
divModal.setAttribute("class", "hide");

function mostrar(){
    divModal.setAttribute("class","");
}

document.getElementById("close").addEventListener("click", () => {
    divModal.setAttribute("class", "hide");
})