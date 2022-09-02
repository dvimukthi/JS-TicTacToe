const cells = document.querySelectorAll(".Cell");
const StatusText = document.querySelector("#StatusText");
const RestartBtn = document.querySelector("#RestartBtn");

// win conditions
const WinConditions = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

// options
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

//  functions
initializeGame();

function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  RestartBtn.addEventListener("click", restartGame);
  StatusText.textContent = `${currentPlayer}'s turn`;
  running = true;
}

function cellClicked() {
  const CellIndex = this.getAttribute("CellIndex");

  if (options[CellIndex] != "" || !running) {
    return;
  }
  updateCell(this, CellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {}
function checkWinner() {}
function restartGame() {}
