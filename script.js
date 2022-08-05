'use strict';
// Button
// 1. Input validation from 4 to 100
// 2. Add placeholder "enter from 4 to 100"

// Hover
// 1. Remove event listener when color = 100%

// Style
// 1. Change cell border color based on # of columns (e.g. more columns less brightness)

const conatiner = document.querySelector('.container');
const grid = document.querySelector('.grid');
const btn = document.getElementById('btn');
let rowNumber;

addEventListener('load', () => {
  gridCreation();
  mouseover();
});

btn.addEventListener('click', rowSelection);

function invokePrompt() {
  rowNumber = prompt('Please enter the number between 4 & 100');
}

function rowSelection() {
  invokePrompt();

  while (
    rowNumber < 4 ||
    rowNumber > 100 ||
    rowNumber === '' ||
    isNaN(rowNumber) ||
    rowNumber.indexOf(' ') >= 0 // check for space
  ) {
    if (rowNumber === null) return; // check Cancel is clicked and close prompt
    alert('The number should be between 4 and 100');
    invokePrompt();
  }

  // Is that valid approach? It checks if value entered is not number > 4 or 100
  /* while (!(rowNumber >= 4) || !(rowNumber <= 100)) {
    if (rowNumber === null) return; // check Cancel is clicked
    alert('The number should be between 4 and 100');
    invokePrompt();
  } */

  if (rowNumber >= 4 || rowNumber <= 100) {
    console.log('nice!');
  }
}

function gridCreation() {
  let elements = '';
  for (var i = 0; i < 256; i++) {
    elements += `<div class="cell"></div>`;
  }

  grid.insertAdjacentHTML('beforeend', elements);
}

function mouseover() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    let count = 0;
    cell.addEventListener('mouseover', event => {
      if (count === 0) event.target.style.background = '#e7e7e5';
      if (count === 1) event.target.style.background = '#cfcfcc';
      if (count === 2) event.target.style.background = '#b7b7b2';
      if (count === 3) event.target.style.background = '#9f9f99';
      if (count === 4) event.target.style.background = '#88877f';
      if (count === 5) event.target.style.background = '#706f66';
      if (count === 6) event.target.style.background = '#58574c';
      if (count === 7) event.target.style.background = '#403f32';
      if (count === 8) event.target.style.background = '#282719';
      if (count === 9) event.target.style.background = '#111000';
    });
    cell.addEventListener('mouseout', () => {
      count++;
    });
  });
}

// Initial grid creation function
/* function gridCreation() {
  for (var i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    grid.prepend(div);
  }
} */
