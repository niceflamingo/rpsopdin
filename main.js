let computerScore = 0
let playerScore = 0

function game() {
  for (let i = 0; i < 5; i++) {
    let computerPlay = function () {
      const choices = ["rock", "paper", "scissors"]
      return choices[Math.floor(Math.random() * choices.length)]
    }

    let computerSelection = computerPlay()

    function playerInput() {
      playerSelection = prompt("Rock, Paper, or Scissors?")
      playerSelection = playerSelection.toLowerCase()
      return playerSelection
    } // add a loop that makes it so that if another word is entered it prompts to user to type rock/paper/scissors

    playerSelection = playerInput()

    let playRound = function (playerSelection, computerSelection) {
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

// const computerSelection = computerPlay();
// console.log(computerSelection);

// const playerSelection = playerInput();
// console.log(playerSelection);

// const round = playRound();
// console.log(round);

// let computerScore = 0;
// let playerScore = 0;

// function computerPlay() {
//   const choices = ["rock", "paper", "scissors"];
//   return choices[Math.floor(Math.random() * choices.length)];
// }

// function playerInput() {
//   let playerChoice = prompt("Choose Rock Paper or Scissors!");

//   if (
//     playerChoice.toLowerCase() === "rock" ||
//     playerChoice.toLowerCase() === "paper" ||
//     playerChoice.toLowerCase() === "scissors"
//   ) {
//     return playerChoice;
//   } else if (
//     playerChoice.toLowerCase() !== "rock" ||
//     playerChoice.toLowerCase() !== "paper" ||
//     playerChoice.toLowerCase() !== "scissors"
//   ) {
//     prompt("Please enter your choice again: Rock Paper or Scissors");
//   } else {
//     prompt("Try reloading the page to try again.");
//   }
//   return playerChoice;
// // }
// // add null statement that reloads or something when value comes back undefined

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie!";
//   } else if (playerSelection === "rock" && computerSelection === "paper") {
//     return "Sorry, you lose! Paper beats rock.";
//   } else if (playerSelection === "rock" && computerSelection === "scissors") {
//     return "You win! Scissors beats rock.";
//   } else if (playerSelection === "paper" && computerSelection === "rock") {
//     return "You win! Paper beats rock.";
//   } else if (playerSelection === "paper" && computerSelection === "scissors") {
//     return "Sorry, you lose! Scissors beats paper";
//   } else if (playerSelection === "scissors" && computerSelection === "paper") {
//     return "You win! Scissors beats paper";
//   } else if (playerSelection === "scissors" && computerSelection === "rock") {
//     return "Sorry, you lose! Rock beats scissors";
//   }
// }
// console.log(playRound("rock", "paper"));

// function game() {
//   for (let i = 0; i < 5; i++) {
//     function playRound(playerSelection, computerSelection) {
//       if (playerSelection === computerSelection) {
//         return "It's a tie!";
//       } else if (playerSelection === "rock" && computerSelection === "paper") {
//         return "Sorry, you lose! Paper beats rock.";
//       } else if (
//         playerSelection === "rock" &&
//         computerSelection === "scissors"
//       ) {
//         return "You win! Scissors beats rock.";
//       } else if (playerSelection === "paper" && computerSelection === "rock") {
//         return "You win! Paper beats rock.";
//       } else if (
//         playerSelection === "paper" &&
//         computerSelection === "scissors"
//       ) {
//         return "Sorry, you lose! Scissors beats paper";
//       } else if (
//         playerSelection === "scissors" &&
//         computerSelection === "paper"
//       ) {
//         return "You win! Scissors beats paper";
//       } else if (
//         playerSelection === "scissors" &&
//         computerSelection === "rock"
//       ) {
//         return "Sorry, you lose! Rock beats scissors";
//       }
//     }
//     playRound(playerSelection, computerSelection);
//   }
// }
// game();
