function clickFunction() {
    const divElement = document.getElementById('parentElement');

    for(let i = 0; i < divElement.children.length; i++) {
        const child = divElement.children[i];

        if(child.style.display === 'block') {
            child.style.display = 'none';
            divElement.style.backgroundColor = 'blue';
        } else {
            child.style.display = 'block';
            divElement.style.backgroundColor = 'white';
        }
    }
}