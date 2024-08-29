const novoButton = document.createElement('button');
novoButton.textContent = 'inserir';
novoButton.setAttribute('onclick', 'clickFunction()');
document.body.appendChild(novoButton);


function clickFunction() {
    const novoH2 = document.createElement('h2');
    novoH2.textContent = 'Inserido';
    document.getElementById('container').appendChild(novoH2);
}