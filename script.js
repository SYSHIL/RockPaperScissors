//function randomly returns rock paper or scissors

function computerPlay(){
    return (Math.floor(Math.random()*3)+1);
}
function gameTime(userChoice){
    let computerChoice = computerPlay();
    //console.log(computerChoice,userChoice);
    let computerVictory = "Computer";
    let userVictory = "User";
    let tie = "Nobody";

    if(computerChoice==1){//computer chooses rock
        if(userChoice==2) // user chooses paper
            return userVictory;
        else if(userChoice==3)
            return computerVictory;
        else{
            return tie;
        }
    }
    else if(computerChoice==2){
        if(userChoice==1)
            return computerVictory;

        else if(userChoice==3)
            return userVictory;
        else{
            return tie;
        }
    }
    else if(computerChoice==3){
        if(userChoice==1)
             return userVictory;
        else if(userChoice==2)
            return computerVictory;

        else{
            return tie;

        }
    }
}
let noOfRounds = 0;
let userWins = 0;
let computerWins= 0;
function updateScores(winner){
    if(winner == "User")
        userWins = userWins+1;
    else if(winner == "Computer")
        computerWins = computerWins+1;
    const scores = document.querySelectorAll(".score>*")
    scores[1].innerText = "User : " + userWins;
    scores[2].innerText = "Computer : " + computerWins;
}
function displayWinner(){
    const winner = document.querySelectorAll(".score>*");
    if(userWins>computerWins) {
        winner[3].innerText = "Winner : User";
    }
    else if(userWins<computerWins){
        winner[3].innerText = "Winner : Computer";

    }
    else{
        winner[3].innerText = "Winner : Nobody !"
    }
}
function playRound(){
    
    let userChoice = this.dataset.key;
    gameResult = gameTime(userChoice);
    const side = document.querySelector('.side');
    const result = document.createElement("span");
    result.innerText = gameResult + " won!";
    side.appendChild(result);
    updateScores(gameResult);
    noOfRounds++;    
    if(noOfRounds==5){
        displayWinner();
        options.forEach(option => {
            option.removeEventListener("click",playRound);
        });
    }
}

const options = document.querySelectorAll(".UI button");
options.forEach(option => {
    option.addEventListener("click",playRound);
});

