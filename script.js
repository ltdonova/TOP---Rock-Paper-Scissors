
var score =document.querySelector('div.score a');
var roundEvent = document.querySelector('div.roundEvent a');
var winner = document.querySelector('div.winner a');

var playerWins = 0;
var computerWins = 0;


function computerPlay(){
    let randomNum = Math.floor(Math.random() * 3) + 1;  // Generate random number to decides the computers choice of Rock/Paper/Scissor

    if(randomNum == 1)         // 1 decides Rock
        return 'rock';
    else if(randomNum == 2)    // 2 decides Paper
        return 'paper';
    else                       // 3 decides Scissor
        return 'scissor';

}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    let winMsg = "";  // this string is for the winner message
    let play = "";  // this string is for the instance that happened

    if(playerSelection == computerSelection){   // checks for tie instance
        winMsg = "It's a tie! ";
        play = `${playerSelection} ties with ${playerSelection}`;
    }
    else if((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "paper" || computerSelection == "paper")  ){  // checks for rock/paper instance
        if(playerSelection == "paper")
            winMsg = "Player Wins! ";
        else
            winMsg = "Computer Wins! ";

        play = "Paper Beats Rock!";
    }
    else if((playerSelection == "scissor" || computerSelection == "scissor") && (playerSelection == "paper" || computerSelection == "paper")  ){  // checks for scissor/paper instance
        if(playerSelection == "scissor")
            winMsg = "Player Wins! ";
        else
            winMsg = "Computer Wins! ";

        play = "Scissor Beats Paper!";
    }
    else{  // checks for rock/scissor instance
        if(playerSelection == "rock")
            winMsg = "Player Wins! ";
        else
            winMsg = "Computer Wins! ";

        play = "Rock Beats Scissor!";
    }

    console.log(winMsg+play);   // prints the result
    roundEvent.textContent = winMsg+play;
    updateScore(winMsg);
    return winMsg + play;
}

function updateScore(winMsg){
    if(playerWins == 0 && computerWins == 0)
        winner.textContent = "";
    if(winMsg.match("Computer"))  // check if Computer won
    computerWins++;
    else if(winMsg.match("Player"))  // check if Player won
    playerWins++;
    else{  
        // tie occured
    }
    score.textContent= `${playerWins}:${computerWins}`;

    if(playerWins > 4 || computerWins > 4){
        if(playerWins == 5)  // Player won
        winner.textContent = "PLAYER WINS THE GAME";
        else                 // Computer won
        winner.textContent = "COMPUTER WINS THE GAME";

        playerWins = 0;
        computerWins = 0;
    }

}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    while((playerWins < 5) && computerWins < 5){  // prompt the user until either player has 5 wins
        let input = prompt("Type either Rock, Paper, of Scissor");
        input = input.toLowerCase();
        if((input != 'rock') && (input != 'paper') && (input != 'scissor')){   // check to make sure the users choice is valid
            alert("Your choice isn't valid, please choose rock, paper, or scissor");
            continue;
        }
        let result = playRound(input,computerPlay());

        if(result.match("Computer"))  // check if Computer won
        computerWins++;
        else if(result.match("Player"))  // check if Player won
        playerWins++;
        else{  
            // tie occured
        }
        console.log(`score: ${playerWins}:${computerWins}`);



    }

    if(playerWins == 5)  // Player won
    console.log("PLAYER WINS THE GAME");
    else                 // Computer won
    console.log("COMPUTER WINS THE GAME");
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => playRound(button.id,computerPlay())));