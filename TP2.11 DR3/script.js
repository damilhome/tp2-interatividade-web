const novoButton = document.createElement('button');
novoButton.textContent = 'inserir';
novoButton.setAttribute('onclick', 'clickFunction()');
document.body.appendChild(novoButton);

function clickFunction() {
    const novoLi = document.createElement('li');
    novoLi.textContent = 'nova entrada';
    document.getElementById('lista').appendChild(novoLi);
}