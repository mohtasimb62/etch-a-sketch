let gridSize = prompt("What is the grid size?");
let size = 720/gridSize;

const containerForGrids = document.querySelector('#container');

const generateGrids = document.querySelector('#gridGeneration');
generateGrids.addEventListener('click', () => {

    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const grids = document.createElement('div');
            grids.setAttribute('style', `height: ${size}px; width: ${size}px; outline: 1px solid black;`);
            grids.classList.add('grid');
            containerForGrids.appendChild(grids);

        }
    }
});

const fillColour = document.querySelector('#container');
fillColour.addEventListener('mousemove', () => {
    fillColour.setAttribute('style', 'backgroud-color: red');
});