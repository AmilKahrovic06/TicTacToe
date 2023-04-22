alert(
  "Iks-Oks je igra za dva igrača koja se igra na mreži od 3x3 polja. Jedan igrač igra sa X, a drugi sa O. Igrači naizmenično postavljaju svoj simbol na prazna polja na mreži. Cilj igre je ostvariti tri simbola u nizu (vodoravno, uspravno ili dijagonalno). Prvi igrač koji uspe ostvariti tri svoja simbola u nizu pobedjuje. Ako se sva polja ispune, a nijedan igrač nije ostvario tri simbola u nizu, igra se završava nerešeno. Srećno!"
);
let startGame = document.querySelector(".btn");
startGame.addEventListener("click", start);

let cells = document.querySelectorAll(".cell");
let currentPlayer = false;
let moveX = true;
let gameOver = false;

function KoJeNaRedu() {
  if (moveX) {
    moveX = false;
    return "X";
  } else {
    moveX = true;
    return "O";
  }
}

function start() {
  gameOver = false;
  currentPlayer = false;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].addEventListener("click", function () {
      if (!gameOver) {
        if (!cells[i].innerText) {
          cells[i].innerText = KoJeNaRedu();
          checkForWinner();
          currentPlayer = !currentPlayer;
        }
      }
    });
  }
}

function checkForWinner() {
  const winningComb = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let comb of winningComb) {
    const [a, b, c] = comb;
    if (
      cells[a].innerText &&
      cells[a].innerText == cells[b].innerText &&
      cells[c].innerText == cells[b].innerText
    ) {
      gameOver = true;
      alert(`${cells[a].innerText} je pobedio!`);
      break;
    }
  }
}
