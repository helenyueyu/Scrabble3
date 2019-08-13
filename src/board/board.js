import { createSquare } from './square'; 

export const board = document.createElement('div');
board.id = 'board'; 

const handleDragEnter = element => {
    element.addEventListener('dragenter', function() {
        element.classList.add('on'); 
    })
}

const handleDragLeave = element => {
    element.addEventListener('dragleave', function() {
        element.classList.remove('on'); 
    })
}

const handleDragOver = element => {
    element.addEventListener('dragover', function(e) {
        e.preventDefault(); 
    })
}

const handleDrop = element => {
    element.addEventListener('drop', function(e) {
        const letterText = e.dataTransfer.getData('text'); 
        console.log(letterText); 
    })
}

for (let i = 0; i < 15; i++) {
    const row = document.createElement('div'); 
    row.className = 'row'; 
    for (let j = 0; j < 15; j++) {
        const square = createSquare(i, j); 
        handleDragEnter(square); 
        handleDragLeave(square); 
        handleDragOver(square); 
        handleDrop(square); 
        
        row.appendChild(square); 
    }
    board.appendChild(row); 
}



