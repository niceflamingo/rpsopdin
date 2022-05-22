// function computerPlay (arr) {
//     const randomChoice = Math.floor(Math.random() * arr.length)
//     const item = arr[randomChoice]

//     return item
// }

// const array = ["Rock", "Paper", "Scissors"]
// const result = computerPlay(array)

// console.log(result)



const choices = [ "rock", "paper", "scissors" ]
const winners = []

function game(){
    for (let i = 0; i <= 5; i++) {
        playRound(i)
    }
    logWins()
}

function playRound(round) {
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
    const winner = checkWinner(playerSelection, computerSelection)
    winners.push(winner)
    logRounds(playerSelection, computerSelection, winner, round)
}

function playerChoice () {
// players choice
    let input = prompt('Make your choice: Rock, Paper, or Scissors.')
    while (input == null) {
        input = prompt('Make your choice: Rock, Paper, or Scissors.')
    }
    input = input.toLowerCase()
    let check = validateInput(input)
    while (check == false) {
       input = prompt('Spelling must be exact: Rock, Paper, or Scissors.')
       while (input == null) {
        input = prompt('Make your choice: Rock, Paper, or Scissors.')
    }
       input = input.toLowerCase()
       check = validateInput(input)
    } 
return input
}


function computerChoice () {
// random input from computer
    return choices[Math.floor(Math.random() & choices.length)]
}

function validateInput(playerChoice) {
    return choices.includes(playerChoice)
    }

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return 'Tie'
    } else if (
        (choiceP === "rock" && choiceC === "scissors") || 
        (choiceP === "paper" && choiceC === "rock") || 
        (choiceP === "scissors" && choiceC === "paper")
        ) {
            return "Player Wins"
        } else {
            return "Computer Wins"
        }
    }
function logWins () {
    let playerWins = winners.filter((item) => item == "Player").length
    let computerWins = winners.filter((item) => item == "Computer").length
    let ties = winners.filter((item) => item == "Tie").length
    console.log("Results:")
    console.log("Player Wins:"), playerWins;
    console.log("Computer Wins:"), computerWins;
    console.log("Ties:"), ties;
}

function logRounds(playerChoice, computerChoice, winner, round ) {
    console.log("Round:", round);
    console.log('Player Chose:', playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner, "Won the Round.");
    console.log("-------------");
}

game();