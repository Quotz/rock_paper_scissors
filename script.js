function computerPlay() {
    let optionsArray = ["rock","paper","scissors"];
    let randomize = Math.floor(Math.random()*optionsArray.length);
    return String(optionsArray[randomize]);
}

/*
let userInput = String(prompt());
let playerSelection = userInput.toLowerCase
*/

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {

        function concatenateOptions() {
            foo = String(playerSelection+computerSelection);
            return foo;
        }

        let para = document.createElement('p');
        let divStats = document.querySelector('.stats');

        
        switch (concatenateOptions()) {

            

            case "paperrock":
            case "scissorspaper":
            case "rockscissors":
                
                para.textContent = playerSelection + " beats " + computerSelection + ", Player Wins";
                divStats.appendChild(para);

                console.log(playerSelection + " beats " + computerSelection + ", Player Wins");
                playerCount++;
                return playerSelection;
                break;

            case "rockpaper":    
            case "scissorsrock":
            case "paperscissors":
                
                para.textContent = computerSelection + " beats " + playerSelection + ", Computer Wins";
                divStats.appendChild(para);
                
                console.log(computerSelection + " beats " + playerSelection + ", Computer Wins");
                computerCount++;
                return computerSelection;
                break;

            case "rockrock":
            case "paperpaper":
            case "scissorsscissors":

                para.textContent = "Tie, no one wins";
                divStats.appendChild(para);

                console.log("No one wins");
                return "tie";
                break;
        }

}


function game() {
    //let playerCount = 0; 
    //let computerCount = 0;
    //for (let i = 0; i < roundCount; i++) {
        let playerSelection = prompt("enter option","rock");      
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);
        if (round == playerSelection) {
            playerCount++;
        } else if (round == computerSelection) {
            computerCount++;
        }
        console.log(playerCount, computerCount)
    //}
}

function updateScoreboard() {
    document.querySelector('#playerWins').textContent = "Player Wins " + playerCount;
    document.querySelector('#computerWins').textContent = "Computer Wins " + computerCount;
}

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playRound("rock", computerPlay())
    updateScoreboard();
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playRound('paper', computerPlay());
    updateScoreboard();
});

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playRound('scissors', computerPlay());
    updateScoreboard();
});

