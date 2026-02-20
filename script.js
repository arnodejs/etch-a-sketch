const container = document.getElementById('container');
const SQUARES = 16;
const SQUARES_SIZE = 100 / SQUARES;

for (let i = 0; i < SQUARES; i++) {
  for (let j = 0; j < SQUARES; j++) {
    container.append(createSquare());
  }
}

function createSquare() {
  const square = document.createElement('div');
  square.style.width = `${SQUARES_SIZE}%`;
  square.classList.add('square');

  return square;
}
