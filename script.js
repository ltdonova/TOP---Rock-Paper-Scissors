
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
    return winMsg + play;
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
