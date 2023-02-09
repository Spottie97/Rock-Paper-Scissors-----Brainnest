function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
  }
  
  // Play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    switch (playerSelection) {
      case "rock":
        if (computerSelection === "rock") {
          return "It's a draw! Both players selected Rock.";
        } else if (computerSelection === "paper") {
          return "You Lose! Paper beats Rock.";
        } else {
          return "You Win! Rock beats Scissors.";
        }
      case "paper":
        if (computerSelection === "rock") {
          return "You Win! Paper beats Rock.";
        } else if (computerSelection === "paper") {
          return "It's a draw! Both players selected Paper.";
        } else {
          return "You Lose! Scissors beat Paper.";
        }
      case "scissors":
        if (computerSelection === "rock") {
          return "You Lose! Rock beats Scissors.";
        } else if (computerSelection === "paper") {
          return "You Win! Scissors beat Paper.";
        } else {
          return "It's a draw! Both players selected Scissors.";
        }
    }
  }
  
  // Play a game of Rock Paper Scissors
  let playerScore = 0;
  let computerScore = 0;
  let gameOver = false;

  const resultDisplay = document.querySelector("#result");
  const scoreDisplay = document.querySelector("#score");

  // Reset game function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    resultDisplay.textContent = "";
    scoreDisplay.textContent = "";
    resetButton.parentNode.removeChild(resetButton);
  }
  
  let resetButton;

// Add event listeners to buttons
const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (!gameOver) {
      const playerSelection = e.target.id;
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
  
      // Display result
      const resultDisplay = document.querySelector("#result");
      resultDisplay.textContent = result;
  
      // Update score
      if (result.startsWith("You Win")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }
  
      // Display score
      const scoreDisplay = document.querySelector("#score");
      scoreDisplay.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  
      // Announce winner
      if (playerScore === 5) {
        resultDisplay.textContent = "You win the game!";
        gameOver = true;
      } else if (computerScore === 5) {
        resultDisplay.textContent = "You lose the game!";
        gameOver = true;
      }
  
      // Show reset button
      if (gameOver) {
        resetButton = document.createElement("button");
        resetButton.textContent = "Reset";
        resetButton.addEventListener("click", resetGame);
        document.body.appendChild(resetButton);
      }
    }
  });
});
