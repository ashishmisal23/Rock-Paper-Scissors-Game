let userScore = 0;
const userResult = document.querySelector("#user-score");
let compScore = 0;
const compResult = document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const drawGame = () => {
    //to display game is draw to user
    msg.innerText = "Game Was Draw, Play Again!";
    msg.style.background = "#031831";

};

const playGame = (userChoice) => {

    //Generate Computer Choice
    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors, paper
            userWin = compChoice === "Paper" ? false : true;
        }
        else if (userChoice === "Paper") {
            //rock scissors
            userWin = compChoice === "Scissors" ? false : true;

        }
        else {
            //rock, paper
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //display to user winning message 
        msg.innerText = `You Win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "Green";
        userScore++;

        userResult.innerText = userScore;


    }
    else {
        //display to user losing message
        compScore++;
        msg.innerText = `You Lost!, ${userChoice} beats your ${compChoice} `;
        msg.style.background = "red";
        compScore++;
        compResult.innerText = compScore;
    }
}
const genCompChoice = () => {

    //rock, paper, scissors
    const options = ["Rock", "Paper", "Scissors"];
    //generate random index between 0-2
    const randIdx = Math.floor(Math.random() * 3);
    return (options[randIdx]);
};

const newGame = document.querySelector("#new-game");
newGame.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userResult.innerText = userScore;
    compResult.innerText = compScore;
    msg.innerText = "Play Your Move!";
    msg.style.background = "#031831";
});