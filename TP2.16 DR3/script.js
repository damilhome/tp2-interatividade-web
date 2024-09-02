const paragrafo = document.getElementsByTagName('p');
for (let i = 0; i < paragrafo.length; i++) {
    paragrafo[i].setAttribute('class', 'ocultar');
}

const accordionItem = document.getElementsByClassName('accordion-item');

for(let i = 0; i < accordionItem.length; i++){
    accordionItem[i].addEventListener("click", () => { 
        if(accordionItem[i].querySelector("p").classList.contains("ocultar")){
            for(let a = 0; a < accordionItem.length; a++ ){
                accordionItem[a].querySelector("p").setAttribute("class", "ocultar");
            }
        }
        accordionItem[i].querySelector("p").classList.toggle("ocultar");
    })
}