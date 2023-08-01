let gridSize = prompt("What is the grid size?");

const containerForGrid = document.querySelector('#container');

// 2 ways of implementing the grid: The non nested uses wrap and dynamic cell size, the nested doesn't use wrap. This was implemented using the latter
const generateGrids = document.querySelector('#gridGeneration');
generateGrids.addEventListener('click', () => {

    for (let i = 0; i < gridSize; i++) {
        const columns = document.createElement('div');
        columns.classList.add('column');
        columns.style.cssText = "display: flex; flex: 1";
        containerForGrid.appendChild(columns);
    }

    const addingRows = document.getElementsByClassName('column');
    for (let j = 0; j < addingRows.length; j++) {
        let curRow = addingRows[j];
        for (let k = 0; k < gridSize; k++) {
            const rows = document.createElement('div');
            rows.classList.add('row');
            rows.style.cssText = "flex: 1; outline: 1px solid black";
            curRow.appendChild(rows);
        }  
    }   
});

const fillColor = document.querySelector('#fillColor');
fillColor.addEventListener('click', () => {
    const allGrids = document.querySelectorAll('.row');
    allGrids.forEach(row => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'red';
        });
    });
});
