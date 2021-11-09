const moves = [
    `ROCK`,
    `PAPER`,
    `SCISSORS`
];

// Function for user choosing move | no param
//  - prompt to capture input, convert to all CAPS
//  - store input in userMove variable
//  - return userMove
function playerSelection() {
    let userMove = prompt(`Rock, Paper, or Scissors?`).toUpperCase();
    return userMove;
}

// Function for Computer chooses move | no parameter
//  - random number generator between 0-2, return value
//  - store returned value in computerMove
//  - return computerMove
function computerSelection() {
    let randomNumber = Math.floor( Math.random() * moves.length);
    let computerMove = moves[randomNumber];
    return computerMove;
}

// Function to play round | params: playerSelection, computerSelection 
//  - test playerSelection v computerSelection
//  - log message with result to console
function playRound(playerSelection, computerSelection) {
    console.log(`${playerSelection} v ${computerSelection}`);
}

// Function to play 5 games | plays 5 total times, keeps score, reports winner at the end

