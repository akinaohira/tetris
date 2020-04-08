'use strict'
{

  const width = 10;
  const height = 15;
  
  let board = document.getElementById('board');

  // make board 
  function makeBoard() {
    for(let x = 0; x < width; x++){
      let column = document.createElement('div');
      board.appendChild(column);
      for(let y = 0; y < height ; y++){
        let cell = document.createElement('div');
        cell.classList.add('cell')
        cell.textContent = `${x} : ${y+1}`;
              if(x ===0 && y===0 ||
          x === 0 && y === 1 ||
          x === 0 && y === 2 ||
          x === 0 && y === 3){
          cell.style.background = "pink";
        } 
        column.appendChild(cell);      
      }
    }

  }

  makeBoard();

}
