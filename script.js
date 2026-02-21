const board = document.getElementById('board');
const boardSizeBtn = document.getElementById('set-board-size');
const boardContainer = document.querySelector('.container');
const setColorInput = document.getElementById('color');
const setRandomBtn = document.getElementById('random-color');
const clearBoardBtn = document.getElementById('clear-board');
const btnsContainer = document.querySelector('.buttons-container');

let initialColor = setColorInput.value;
const initialSquares = 16;
const initialSquareWidth = 100 / 16;

function handleSquareSize() {
  const size = +prompt('Enter square size', 16);

  if (!size || size >= 100 || size === null) return;

  const SQUARES = size;
  const SQUARES_WIDTH = 100 / SQUARES;
  renderSquares(SQUARES, SQUARES_WIDTH);
}

function createSquare(width) {
  const square = document.createElement('div');
  square.style.width = `${width}%`;
  square.classList.add('square');

  return square;
}

function renderSquares(squares, width) {
  boardContainer.classList.remove('hidden');

  board.innerText = '';

  for (let i = 0; i < squares * squares; i++) {
    board.append(createSquare(width));
  }
}

function handleColor(e) {
  const red = randomColor();
  const green = randomColor();
  const blue = randomColor();
  initialColor = `rgb(${red},${green},${blue})`;
  setColorInput.setAttribute(
    'value',
    `#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`
  );
}

function changeColor(e) {
  initialColor = e.target.value;
}

function randomColor() {
  return Math.floor(Math.random() * 255);
}

function clearBoard() {
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => (square.style.backgroundColor = 'white'));
}

setColorInput.addEventListener('change', changeColor);
boardSizeBtn.addEventListener('click', handleSquareSize);
board.addEventListener('mouseover', (e) => {
  const target = e.target;

  e.stopPropagation();

  target.addEventListener('mouseenter', (e) => {
    console.log(initialColor);
    e.currentTarget.style.backgroundColor = initialColor;
  });
});

setRandomBtn.addEventListener('click', handleColor);

clearBoardBtn.addEventListener('click', clearBoard);

renderSquares(initialSquares, initialSquareWidth);

function convertToHex(color) {
  const hex = color.toString(16);

  return hex.padStart(2, 0);
}

convertToHex(180);
