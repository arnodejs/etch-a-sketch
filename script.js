const container = document.getElementById('container');
const squareSizeBtn = document.getElementById('square-size');

function handleSquareSize() {
  const size = +prompt('Enter square size', 16);

  if (!size || size >= 100 || size === null) return;

  const SQUARES = size;
  const SQUARES_WIDTH = 100 / SQUARES;
  renderSquares(SQUARES, SQUARES_WIDTH);
}

squareSizeBtn.addEventListener('click', handleSquareSize);

function renderSquares(squares, width) {
  container.innerText = '';

  for (let i = 0; i < squares; i++) {
    for (let j = 0; j < squares; j++) {
      container.append(createSquare(width));
    }
  }
}

function createSquare(width) {
  const square = document.createElement('div');
  square.style.width = `${width}%`;
  square.classList.add('square');

  return square;
}

container.addEventListener('mouseover', (e) => {
  const target = e.target;

  e.stopPropagation();

  target.addEventListener('mouseenter', (e) => {
    e.currentTarget.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
    console.log('click');
  });
});

function randomColor() {
  return Math.floor(Math.random() * 255);
}
