const choices = ["Rock", "Paper", "Scissors"];
let computerScore = document.getElementById("computerScore");
let userScore = document.getElementById("playerScore");
const rockButton = document.getElementById("rockBtn")
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
let signs = document.getElementById("choices");
let start = document.getElementById("start");
let winOrLose = document.getElementById("win-lose");
var userScoreCount= 0;
var computerScoreCount = 0;
start.innerHTML="Play";
signs.style.display="none";
winOrLose.style.display = "none";

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "SCISSORS") {
        return "Draw!";
    }

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK") {
            computerScoreCount++
            computerScore.innerHTML=computerScoreCount;
       // computerScore++;
            if (computerScoreCount == 5) {
                userScoreCount = 0;
                userScore.innerHTML = userScoreCount;
                computerScoreCount = 0;
                computerScore.innerHTML = computerScoreCount;
                start.style.display="unset";
                start.innerHTML="Play Again";
                signs.style.display="none";
                winOrLose.style.display = "unset";
                winOrLose.innerHTML = "You lose! Computer wins!";
            }
        return "You lose! " + computerSelection.toUpperCase() + " beats " + playerSelection.toUpperCase() + "!";
    }

    if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
            userScoreCount++
            userScore.innerHTML=userScoreCount
       // userScore++;
            if (userScoreCount == 5) {
                userScoreCount = 0;
                userScore.innerHTML = userScoreCount;
                computerScoreCount = 0;
                computerScore.innerHTML = computerScoreCount;
                start.style.display="unset";
                start.innerHTML="Play Again";
                signs.style.display="none";
                winOrLose.style.display = "unset";
                winOrLose.innerHTML = "You win! User wins!";
            }
        return "You win! " + playerSelection.toUpperCase() + " beats " + computerSelection.toUpperCase() + "!";
    }


}

rockButton.addEventListener("click", function() {
    playRound("ROCK", getComputerChoice());
});

paperButton.addEventListener("click", function() {
    playRound("PAPER", getComputerChoice());;
});

scissorsButton.addEventListener("click", function() {
    playRound("SCISSORS", getComputerChoice());
});


start.addEventListener("click", function() {
    
    start.style.display="none";
    signs.style.display="unset";
    winOrLose.style.display ="none";
    
});

// function game() {
    
//     for (let i = 1; i < 6; i++) {
//         const computerSelection = getComputerChoice();
//         const playerSelection = prompt("Enter your choice");
//         console.log(i + ". " + playRound(playerSelection, computerSelection));
//     }

//     if (userScore > computerScore) {
//         console.log("Human wins! ＼(＾O＾)／");
//     } else if (userScore == computerScore) {
//         console.log("It's a draw plebs!");
//     } else {
//         console.log("Computer wins! ლ(ಠ益ಠლ)");
//     }
// }


