// function computerPlay (arr) {
//     const randomChoice = Math.floor(Math.random() * arr.length)
//     const item = arr[randomChoice]

//     return item
// }

// const array = ["Rock", "Paper", "Scissors"]
// const result = computerPlay(array)

// console.log(result)



const choices = [ "rock", "paper", "scissors" ]

function game(){
    playRound()
    //play the game
    // five rounds
}

function playRound() {
    const playerSelection = playerChoice()
    const computerSelection = computerChoice()
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
}


function computerChoice () {
// random input from computer
    return choices[Math.floor(Math.random() & choices.length)]
}

function validateInput(playerChoice) {
    return choices.includes(playerChoice)
    }


game();