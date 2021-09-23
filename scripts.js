// Create initial variables

let computerSelection = "rock";
let playerSelection = "paper";
let playerWins = 0;
let computerWins = 0;
let ties = 0;

// Create computerPlay function that returns randomly between rock, paper os scissors

function computerPlay() {
    let selector = Math.random();
    // 0-1/3 - Rock || 1/3-2/3 - Paper || 2/3-1 - Scissors
    if (selector < (1/3)) {
        computerSelection = "rock";
    } else if (selector < (2/3)) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

// Create function that plays a round between player selection and computer selection and declares winner
// Since there will be multiple rounds, this is where the user will input his selection

function playRound() {

    // computerPlay can be moved here for debugging, but is moved later on to make cheating harder. With it after the player picks, he can't know the computer's move before he picks

    playerSelection = window.prompt("What do you select?");
    playerSelection = playerSelection.toLowerCase();

    // Make a loop until used picks between rock, paper or scissors

    while (!(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")) {
        console.log("Hey, no cheating! Please, write 'Rock', 'Paper' or 'Scissors'");
        playerSelection = window.prompt("What do you select?");
        playerSelection = playerSelection.toLowerCase();
    }

    computerPlay();

    // Verify winner (or tie), display message and count score

    if (computerSelection == playerSelection) {
        console.log("It was a tie!");
        return ties += 1;
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            console.log("You Win! Paper beats Rock");
            return playerWins += 1;
        } else {
            console.log("You Lose! Rock beats Scissors");
            return computerWins += 1;
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            console.log("You Lost! Paper beats Rock");
            return computerWins += 1;
        } else {
            console.log("You Win! Scissors beats Paper");
            return playerWins += 1;
        }
    } else {
        if (playerSelection == "rock") {
            console.log("You Win! Rock beats Scissors");
            return playerWins += 1;
        } else {
            console.log("You Lose! Scissors beats Paper");
            return computerWins += 1;
        }
    }
}

// Create function that makes the game a best of 5, keeping score and declaring final winner

function game() {
    let matches = 0;
    while (matches < 5) {
        playRound();
        matches += 1;
    }
    console.log("You have won " + playerWins + ", lost " + computerWins + " and had " + ties + " tied games.");
    if (playerWins > computerWins) {
        console.log("Congratulations! You've won!!");
    } else if (playerWins < computerWins) {
        console.log ("I'm sorry, you lost")
    } else {
        console.log("OMG, you guys tied!")
    }
}

game()