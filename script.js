
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
    let winMsg = "";
    let play = "";

    if(playerSelection == computerSelection){
        winMsg = "It's a tie! ";
        play = `${playerSelection} ties with ${playerSelection}`;
    }
    else if((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "paper" || computerSelection == "paper")  ){
        if(playerSelection == "paper")
            winMsg = "Player Wins! ";
        else
            winMsg = "Computer Wins! ";

        play = "Paper Beats Rock!";
    }
    else if((playerSelection == "scissor" || computerSelection == "scissor") && (playerSelection == "paper" || computerSelection == "paper")  ){
        if(playerSelection == "scissor")
            winMsg = "Player Wins! ";
        else
            winMsg = "Computer Wins! ";

        play = "Scissor Beats Paper!";
    }
    else{
        if(playerSelection == "rock")
            winMsg = "Player Wins! ";
        else
            winMsg = "Computer Wins! ";

        play = "Rock Beats Scissor!";
    }

    console.log(winMsg+play);
    return winMsg + play;
}


function game(){
    let playerWins = 0;
    let computerWins = 0;

    while((playerWins < 5) && computerWins < 5){
        let input = prompt("Type either Rock, Paper, of Scissor");
        input = input.toLowerCase();
        if((input != 'rock') && (input != 'paper') && (input != 'scissor')){
            alert("Your choice isn't valid, please choose rock, paper, or scissor");
            continue;
        }
        let result = playRound(input,computerPlay());

        if(result.match("Computer"))
        computerWins++;
        else if(result.match("Player"))
        playerWins++;
        else{

        }
        console.log(`score: ${playerWins}:${computerWins}`);



    }

    if(playerWins == 5)
    console.log("PLAYER WINS THE GAME");
    else
    console.log("COMPUTER WINS THE GAME");
}
