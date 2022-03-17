//function randomly returns rock paper or scissors

function computerPlay(){
    return (Math.floor(Math.random()*3)+1);
}
function gameTime(userChoice){
    let computerChoice = computerPlay();
    //console.log(computerChoice,userChoice);
    let computerVictory = "Computer wins !";
    let userVictory = "User wins !";
    let tie = "It's a tie !";
    let invalidChoice = "Invalid choice !";

    if(computerChoice==1){
        if(userChoice==2)
            return computerVictory;
        else if(userChoice==3)
            return userVictory;
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
let gameResult;
function playRound(){
    let userChoice = this.dataset.key;
    gameResult = gameTime(userChoice);
    const body = document.querySelector('body');
    const result = document.createElement("p");
    result.innerText = gameResult;
    body.appendChild(result);
}

const options = document.querySelectorAll(".UI button");
options.forEach(option => {
    option.addEventListener("click",playRound);
});


