import tileDistribution from './tileDistribution'; 

const drawCards = numCards => {
    return tileDistribution.splice(0, numCards); 
}

let virtualHand1 = drawCards(7); 
let virtualHand2 = drawCards(7); 

const createPointLabel = points => {
    const pts = document.createElement('span');
    pts.innerHTML = `${points}`;
    pts.className = 'points';
    return pts;
}

const createTile = b => {
    const tile = document.createElement('div'); 
    tile.className = 'tile'; 
    tile.innerHTML = b.letter; 

    const pts = createPointLabel(b.points); 
    tile.appendChild(pts); 

    tile.setAttribute('draggable', true);
    tile.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text', e.target.innerHTML);
    })
    tile.addEventListener('dragend', function(e) {
        console.log('drop')
    })

    return tile; 
}


const createHandTiles = (virtualHand, actualHand) => {
    for (let i = 0; i < virtualHand.length; i++) {
        const tile = createTile(virtualHand[i]); 

        actualHand.appendChild(tile); 
    }
}


const createUndoButton = player => {
    const button = document.createElement('button');
    button.className = 'undo-button';
    button.innerHTML = 'UNDO';
    button.id = `${player}-submit-button`;
    return button; 
}

const createSubmitButton = player => {
    const button = document.createElement('button'); 
    button.className = 'submit-button';
    button.innerHTML = 'SUBMIT'; 
    button.id = `${player}-submit-button`; 
    return button; 
}

const createLabel = player => {
    const label = document.createElement('span'); 
    label.innerHTML = player; 
    label.id = 'label'; 
    return label; 
}

// Where to put all the tiles 
const createTileMat = player => {
    const tileMat = document.createElement('div'); 
    tileMat.className = 'tile-mat'; 
    return tileMat; 
}

const createHand = player => {
    const hand = document.createElement('div'); 
    hand.id = `${player}`; 
    
    const label = createLabel(player); 
    const undoButton = createUndoButton(player);  
    const submitButton = createSubmitButton(player); 
    const tileMat = createTileMat(player); 

    player === 'player1' ? createHandTiles(virtualHand1, tileMat) : createHandTiles(virtualHand2, tileMat);  

    hand.appendChild(label); 
    hand.appendChild(undoButton); 
    hand.appendChild(submitButton); 
    hand.appendChild(tileMat); 

    return hand; 
}

export const hands = document.createElement('div'); 
hands.id = 'hands'; 

const actualHand1 = createHand('player1');
const actualHand2 = createHand('player2'); 

hands.appendChild(actualHand1); 
hands.appendChild(actualHand2); 