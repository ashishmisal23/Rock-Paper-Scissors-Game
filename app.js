let userScore = 0;
const userResult= document.querySelector("#user-score");
let compScore = 0;
const compResult= document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    console.log("Game Was Draw");
    msg.innerText="Game Was Draw, Play Again!";
    msg.style.background="#031831";

};

const playGame = (userChoice) => {
    console.log("User Choice: ", userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice: ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock scissors
            userWin = compChoice === "scissors" ? false : true;

        }
        else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You Win");
        msg.innerText=`You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.background="Green";
        userScore++;
        
        userResult.innerText=userScore;
      

    }
    else {
        console.log("You Lose");
        compScore++;
        msg.innerText=`You Lost!, ${compChoice} beats your ${userChoice}`;
        msg.style.background="red";
        compScore++;
        compResult.innerText=compScore; 
    }
}
const genCompChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    console.log(options[randIdx]);
    return options[randIdx];


};

const newGame=document.querySelector("#new-game");
newGame.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userResult.innerText=userScore;
    compResult.innerText=compScore;
    msg.innerText="Play Your Move!";
    msg.style.background="#031831";
});