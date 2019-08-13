export const createSquare = (i, j) => {
    const square = document.createElement('div'); 
    square.className = `square ${i}_${j}`; 
    return square; 
}
