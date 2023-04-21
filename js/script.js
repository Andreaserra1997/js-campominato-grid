/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const eleGrid = document.querySelector('.grid');
const btnPlay = document.querySelector('#play');

let modEasy = document.querySelector('#easy')
modEasy = 100;

let modHard = document.querySelector('#hard')
modHard = 81;

let modCrazy = document.querySelector('#crazy')
modCrazy = 49;

btnPlay.addEventListener('click',
    function () {
        createGrid(modEasy, eleGrid);
    }
);

function createGrid(numCells, eleContainer) {
    eleContainer.innerHTML = '';
    for (let i = 1; i <= numCells; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerHTML = [i];
        eleContainer.append(cell);
        cell.addEventListener('click', function () {
            console.log(cell);
            cell.classList.toggle('clicked');
        });
    }
};