const but = document.getElementsByTagName('button');
let elementoPai = null;

for (let i = 0; i < but.length; i++) {
    but[i].addEventListener('click', () => {
        elementoPai = but[i].parentElement.parentElement;
        const filhoNota = elementoPai.querySelector('.nota');
        if(parseInt(filhoNota.textContent) >= 5){
            elementoPai.classList.add("aprovado");
        }
        else{
            elementoPai.classList.add("reprovado");
    
        }
    })
}
