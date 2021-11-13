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

// FUNCTION
//  name: print
//  purpose: print final msg to console once there's a winner
//  param: userScore, compScore
function printMsg(userScore, compScore) {
    if ( userScore > compScore ) {
        console.log(`Final score: Player: ${userScore} | Computer: ${compScore} -- PLAYER WINS!`);
    } else if ( compScore > userScore ) {
        console.log(`Final score: Player: ${userScore} | Computer: ${compScore} -- COMPUTER WINS!`);
    }    
}

// Function to play first to win 5 games | reports winner at the end
// run the game until either the user or comp scores 5 points, once user wins set gameOver to true

function game() {
    let userScore = 0;
    let compScore = 0;
    let gameOver = false;
    while (!gameOver) {
        let player = playerSelection();
        let computer = computerSelection();
        let result = playRound(player, computer);
        if (result === 1) {
            userScore++;
            if ( userScore === 5) {
                gameOver = true;
                printMsg(userScore, compScore);
            }
        } else if ( result === 2 ) {
            compScore++;
            if ( compScore === 5 ) {
                gameOver = true;
                printMsg(userScore, compScore);
            }
        }
    }
}