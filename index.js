let rounds = 0;

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "scissors";
  } else if (randomChoice === 2) {
    return "paper";
  }
}

function playRound(playerSelection) {
  let playerScore = document.getElementById("playerScore");
  let computerScore = document.getElementById("computerScore");
  let computerSelection = getComputerChoice();
  let result = document.getElementById("result");

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore.textContent++;
    console.log("You win!");
    result.textContent =
      "You Win! " + playerSelection + "beats " + computerSelection;
    if (playerScore.textContent == 5) {
      result.textContent = "PLayer Won";
      console.log("YOU won THE WHOLE GAME!");
      computerScore.textContent = 0;
      playerScore.textContent = 0;
      return;
    }
  } else if (playerSelection === computerSelection) {
    console.log("You tied");
    result.textContent = "You tied";
  } else {
    result.textContent =
      "You Lose! " + computerSelection + " beats " + playerSelection;
    computerScore.textContent++;
    console.log("You Lose!");

    if (computerScore.textContent == 5) {
      result.textContent = "Computer WON";
      console.log("YOU LOST THE WHOLE GAME!");
      computerScore.textContent = 0;
      playerScore.textContent = 0;
      return;
    }
  }
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock");
});
document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors");
});
document.getElementById("paper").addEventListener("click", () => {
  playRound("paper");
});
