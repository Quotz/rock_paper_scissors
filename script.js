function computerPlay() {
    let optionsArray = ["rock","paper","scissors"];
    let randomize = Math.floor(Math.random()*optionsArray.length);
    return String(optionsArray[randomize]);
}

/*
let userInput = String(prompt());
let playerSelection = userInput.toLowerCase
*/



function playRound(playerSelection, computerSelection) {

        function concatenateOptions() {
            foo = String(playerSelection+computerSelection);
            return foo;
        }

        switch (concatenateOptions()) {
            case "paperrock":
            case "scissorspaper":
            case "rockscissors":
                console.log(playerSelection + " beats " + computerSelection + ", Player Wins");
                return playerSelection;
                break;
            case "rockpaper":    
            case "scissorsrock":
            case "paperscissors":
                console.log(computerSelection + " beats " + playerSelection + ", Computer Wins");
                return computerSelection;
                break;
            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":
                console.log("No one wins");
                return "tie";
                break;
        }
}

function game() {
    let playerCount = 0; 
    let computerCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("enter option","rock");      
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round == playerSelection) {
            playerCount++;
        } else if (round == computerSelection) {
            computerCount++;
        }
        console.log(playerCount, computerCount)
    }
}
