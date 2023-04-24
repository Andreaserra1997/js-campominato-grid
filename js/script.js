/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const eleGrid = document.querySelector('.grid');
const eleCell = document.querySelector('.cell');
const btnPlay = document.querySelector('#play');

btnPlay.addEventListener('click',
    function () {
        const selectDifficulty = document.querySelector('#difficulty');
        let valueDifficulty = selectDifficulty.options[selectDifficulty.selectedIndex].value;
        // const whEasy = 'calc(100% / 10)'
        // const whHard = 'calc(100% / 9)'
        // const whCrazy = 'calc(100% / 7)'

        if (valueDifficulty === 'easy') {
            // eleCell.style.width = whEasy;
            // eleCell.style.height = whEasy;
            createGrid(100, eleGrid);
        } else if (valueDifficulty === 'hard') {
            // eleCell.style.width = whHard;
            // eleCell.style.height = whHard;
            createGrid(81, eleGrid)
        } else if (valueDifficulty === 'crazy') {
            // eleCell.style.width = whCrazy;
            // eleCell.style.height = whCrazy;
            createGrid(49, eleGrid)
        }
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