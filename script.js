//function randomly returns rock paper or scissors
function computerPlay(){
    return (Math.floor(Math.random()*3)+1);
}
function gameTime(){
    let computerVictory = "Computer wins !";
    let userVictory = "User wins !";
    let tie = "It's a tie !";
    let invalidChoice = "Invalid choice !";

    if(userChoice > 3 || userChoice < 1){
        return invalidChoice;
    }

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

function playRound(){
    userChoice = this.dataset.key;
    computerChoice = computerPlay();
    alert(gameTime(userChoice,computerChoice));
}
/*function play(noOfRounds){
    for(let i=0;i<noOfRounds;i++){
    let userChoice = prompt('Enter 1 for stone, 2 for paper, 3 for scissors');
    let computerChoice = computerPlay();
    alert(playround(computerChoice,userChoice));
    }
}
play(noOfRounds);
alert("Thank you for playing !");
*/

const options = document.querySelectorAll(".UI button");
options.forEach(option => {
    option.addEventListener("click",playRound);

});
