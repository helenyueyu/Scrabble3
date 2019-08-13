require('./index.css'); 
import { title } from './title/title'; 
import { board } from './board/board'; 
import { hands } from './hand/hand'; 

const game = document.createElement('div'); 
game.id = 'game'; 

game.appendChild(title); 
game.appendChild(board); 
game.appendChild(hands); 

document.body.appendChild(game); 