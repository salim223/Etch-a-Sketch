const defaultSize = 16;
const numSqButton = document.getElementById('numSq');

function addHoverEffect(square) {
    square.addEventListener('mouseover', () => {
        square.classList.add('hovered');
    });
}

function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        addHoverEffect(square);
        container.appendChild(square);
    }
}

numSqButton.onclick = () => {
    const num = prompt('Enter number of squares per side (max 100):');
    const gridSize = Math.min(Math.max(parseInt(num), 1), 100); 
    createGrid(gridSize);
};

createGrid(defaultSize);
