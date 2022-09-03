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

function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X";
  StatusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < WinConditions.length; i++) {
    const condition = WinConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    StatusText.textContent = `${currentPlayer} wins!`;
    running = false;
  } else if (!options.includes("")) {
    StatusText.textContent = `Draw!`;
    running = false;
  } else {
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  StatusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
