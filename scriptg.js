let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const drawGame = () =>{
    console.log("Game was draw!");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compscorePara.innerText = compScore;
        msg.innerText =`you lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const gencomp = () =>{
    //Rock , Paper , Scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

//Generate user choice -->
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    //Generate computer choice -->
    const compChoice = gencomp();
    console.log("computer choice =", compChoice);

    //result game 
    if (userChoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper , scissors
            userWin = compChoice === "scissors" ? true : false;
        } else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "rock" ? true : false;
        } else{
            //rock , paper
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});