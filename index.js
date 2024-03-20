const escolhas = ["pedra", "papel", "tesoura"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
  const computerChoice = escolhas[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "EMPATE";
  } else {
    switch (playerChoice) {
      case "pedra":
        result = computerChoice === "tesoura" ? "VC GANHOU" : "VC PERDEU";
        break;
      case "tesoura":
        result = computerChoice === "pedra" ? "VC PERDEU" : "VC GANHOU";
        break;
      case "papel":
        result = computerChoice === "tesoura" ? "VC PERDEU" : "VC GANHOU";
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  switch (result) {
    case "VC GANHOU":
      resultDisplay.classList.replace("resultDisplay", "greenText");
      resultDisplay.classList.replace("redText", "greenText");
      break;
    case "VC PERDEU":
      resultDisplay.classList.replace("resultDisplay", "redText");
      resultDisplay.classList.replace("greenText", "redText");
      break;
    case "EMPATE":
      resultDisplay.classList.remove("redText");
      resultDisplay.classList.remove("greenText");
      resultDisplay.classList.add("resultDisplay");
      break;
  }
}
