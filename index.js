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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Paper loses to scissors";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "You tie! Scissors ties with scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Rock loses to Paper";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "You tie! Paper ties with paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissor beats paper";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "You tie! Rock ties with rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Scissors loses to rock";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    playerSelection = prompt("Player, please type in your selection");

    let lowercasePlayerSelection = playerSelection.toLowerCase();

    console.log(playRound(lowercasePlayerSelection, computerSelection));
  }
}
