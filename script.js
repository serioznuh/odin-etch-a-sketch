'use strict';

const conatiner = document.querySelector('.container');
const grid = document.querySelector('.grid');
const btnColumnNum = document.getElementById('btnColumn');
const btnReset = document.getElementById('btnReset');
const color = document.getElementById('color');
let columnNumber = 16;

addEventListener('load', gamesStart);
btnColumnNum.addEventListener('click', rowSelection);
btnReset.addEventListener('click', resetGrid);
color.addEventListener('change', changeCellBackgroundColor);

function gamesStart() {
  gridCreation();
  mouseover();
}

function rowSelection() {
  invokePrompt();

  while (
    columnNumber < 2 ||
    columnNumber > 100 ||
    columnNumber === '' ||
    isNaN(columnNumber) ||
    columnNumber.indexOf(' ') >= 0 // check for space
  ) {
    if (columnNumber === null) return; // check Cancel is clicked and close prompt
    alert('The number should be between 2 and 100');
    invokePrompt();
  }

  // Is that valid approach? It checks if value entered is not number > 4 or 100
  /* while (!(columnNumber >= 2) || !(columnNumber <= 100)) {
      if (columnNumber === null) return; // check Cancel is clicked
      alert('The number should be between 4 and 100');
      invokePrompt();
    } */

  if (columnNumber >= 2 || columnNumber <= 100) newGrid();
}

function newGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }

  gamesStart();

  grid.style.setProperty(
    'grid-template-columns',
    `repeat(${columnNumber}, 1fr)`
  );
  grid.style.setProperty('grid-template-rows', `repeat(${columnNumber}, 1fr)`);
}

function invokePrompt() {
  columnNumber = prompt('Please enter the number between 2 & 100');
}

function gridCreation() {
  let elements = '';
  for (var i = 0; i < columnNumber ** 2; i++) {
    elements += `<div class="cell"></div>`;
  }

  grid.insertAdjacentHTML('beforeend', elements);
}

function mouseover() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    let count = 0;
    cell.addEventListener('mouseover', event => {
      if (count === 0) {
        event.target.style.background = '#e7e7e5';
        event.target.style.borderColor = '#e7e7e5';
      }
      if (count === 1) {
        event.target.style.background = '#cfcfcc';
        event.target.style.borderColor = '#cfcfcc';
      }
      if (count === 2) {
        event.target.style.background = '#b7b7b2';
        event.target.style.borderColor = '#b7b7b2';
      }
      if (count === 3) {
        event.target.style.background = '#9f9f99';
        event.target.style.borderColor = '#9f9f99';
      }
      if (count === 4) {
        event.target.style.background = '#88877f';
        event.target.style.borderColor = '#88877f';
      }
      if (count === 5) {
        event.target.style.background = '#706f66';
        event.target.style.borderColor = '#706f66';
      }
      if (count === 6) {
        event.target.style.background = '#58574c';
        event.target.style.borderColor = '#58574c';
      }
      if (count === 7) {
        event.target.style.background = '#403f32';
        event.target.style.borderColor = '#403f32';
      }
      if (count === 8) {
        event.target.style.background = '#282719';
        event.target.style.borderColor = '#282719';
      }
      if (count === 9) {
        event.target.style.background = '#111000';
        event.target.style.borderColor = '#111000';
      }
    });
    cell.addEventListener('mouseout', () => {
      count++;
    });
  });
}

function resetGrid() {
  mouseover();
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.style.background = '#ffffff';
  });
}

function changeCellBackgroundColor(color) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', event => {
      event.target.style.background = color.target.value;
      event.target.style.borderColor = color.target.value;
    });
  });
}

// Change cell border color based on # of columns
/* function setCellBorderColor() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    if (columnNumber > 25) {
      cell.style.borderColor = '#b7b7b2';
    } else if (columnNumber > 70) {
      cell.style.borderColor = '#e7e7e5';
    }
  });
} */
