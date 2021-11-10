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
    // test for DRAW
    if ( playerSelection === computerSelection) {
        console.log(`DRAW!`);
        return 0;
    }
    // test for ROCK > SCISSORS
    if ( playerSelection === `ROCK` && computerSelection === `SCISSORS` ) {
        console.log(`You WIN! ROCK beats PAPER!`);
        return 1;
    } else if ( computerSelection === `ROCK` && playerSelection === `SCISSORS` ) {
        console.log(`You LOSE! ROCK beats PAPER!`);
        return 2;
    }
    // test for PAPER > ROCK
    if ( playerSelection === `PAPER` && computerSelection === `ROCK` ) {
        console.log(`You WIN! PAPER beats ROCK!`);
        return 1;
    } else if ( computerSelection === `PAPER` && playerSelection === `ROCK` ) {
        console.log(`You LOSE! PAPER beats ROCK!`);
        return 2;
    }
    // test for SCISSORS > PAPER
    if ( playerSelection === `SCISSORS` && computerSelection === `PAPER` ) {
        console.log(`You WIN! SCISSORS beats PAPER!`);
        return 1;
    } else if ( computerSelection === `SCISSORS` && playerSelection === `PAPER` ) {
        console.log(`You LOSE! SCISSORS beats PAPER!`);
        return 2;
    }
}

// Function to play 5 games | plays 5 total times, keeps score, reports winner at the end
function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 1; i < 6; i++) {
        let player = playerSelection();
        let computer = computerSelection();
        let result = playRound(player, computer);
        if (result === 1) {
            userScore++;
        } else if ( result === 2 ) {
            compScore++;
        }
    }
    if ( userScore > compScore ) {
        console.log(`Final score: Player: ${userScore} | Computer: ${compScore} -- PLAYER WINS!`);
    } else if ( compScore > userScore ) {
        console.log(`Final score: Player: ${userScore} | Computer: ${compScore} -- COMPUTER WINS!`);
    } else {
        console.log(`WE HAVE A TIE!`);
    }
}