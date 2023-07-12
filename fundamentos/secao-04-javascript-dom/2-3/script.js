const father = document.getElementById('pai');

let newSon = document.createElement('section');

newSon.innerHTML = "olá, sou o filho";

father.appendChild(newSon);

const irmaoOndeEsta = document.getElementById('elementoOndeVoceEsta');

let newBrother = document.createElement('h1');

newBrother.innerHTML = "Irmão";

irmaoOndeEsta.appendChild(newBrother);

const firstSon = document.getElementById('primeiroFilhoDoFilho');

let grandchild = document.createElement('h2');

grandchild.innerHTML = "Neto";

firstSon.appendChild(grandchild);


grandchild.parentElement.parentElement.nextElementSibling