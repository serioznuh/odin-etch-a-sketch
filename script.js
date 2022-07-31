'use strict';
// COMMENTS
// 1. Input validation from 4 to 30

const conatiner = document.querySelector('.container');
const grid = document.querySelector('.grid');
// const cell = document.querySelector('.cell');

addEventListener('load', gridCreation);

function gridCreation() {
  for (var i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    grid.prepend(div);
  }
}

// function gridCreation() {
//   for (var i = 0; i < 961; i++) {
//     const div = document.createElement('div');
//     div.classList.add('cell');
//     grid.prepend(div);
//   }
// }
