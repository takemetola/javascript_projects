const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }
    else {
        switch (playerChoice) {
            case "rock": result = (computerChoice === "scissors") ? "WINNER!" : "LOSER.";
                break;
            case "paper": result = (computerChoice === "rock") ? "WINNER!" : "LOSER.";
                break;
            case "scissors": result = (computerChoice === "paper") ? "WINNER!" : "LOSER.";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "WINNER!" : resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        break;
        case "LOSER." : resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }
}
