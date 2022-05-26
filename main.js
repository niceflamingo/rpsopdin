// Rock Paper Scissors game to played within Console - The Odin Project Exercise
let computerScore = 0
let playerScore = 0

function game() {
  for (let i = 0; i < 5; i++) {
    // look up how to not count a "round" if a value other than rock/paper/scissors has been added
    function computerPlay() {
      const choices = ["rock", "paper", "scissors"]
      return choices[Math.floor(Math.random() * choices.length)]
    }

    let computerSelection = computerPlay()

    function playerInput() {
      playerSelection = prompt("Rock, Paper, or Scissors?")
      playerSelection = playerSelection.toLowerCase()
      return playerSelection
    } // look up how to add a loop that makes it so that if another word is entered it prompts to user to type rock/paper/scissors
    // while or for? maybe

    let playerSelection = playerInput()

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert("You lose! Paper beats Rock")
      } else if (
        playerSelection === "rock" &&
        computerSelection === "scissors"
      ) {
        playerScore += 1
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert("You win! Rock beats Scissors")
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert(" You win! Paper beats Rock")
      } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
      ) {
        computerScore += 1
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert("You lose. Scissors beats paper")
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "rock"
      ) {
        computerScore += 1
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert("You lose. Rock beats Scissors")
      } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
      ) {
        playerScore += 1
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert("You win! Scissors beats Paper")
      } else if (playerSelection === computerSelection) {
        console.log(
          `Your score is ${playerScore} and the computer's score is ${computerScore}`
        )
        alert("It's a draw!")
      }
    }

    playRound(playerSelection, computerSelection)
  }
}

game()
endMessage()

function endMessage() {
  playerScore > computerScore
    ? alert(
        `ヽ(^‿^)ノ Congratulations, you beat the computer. Your score: ${playerScore}. Computer's Score: ${computerScore}`
      )
    : alert(
        `¯\_(ツ)_/¯, you lost to the computer. Your score: ${playerScore}. Computer's Score: ${computerScore}`
      )
}
