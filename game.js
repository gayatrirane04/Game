let userScore=0;
let computerScore=0;

const choices =document.querySelectorAll(".choice");
 
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const genComputerChoice =() => {
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=() =>{
    msg.innerText=" Draw , Play again";
    msg.style.backgroundColor= " rgb(6, 6, 11)";
};

const showWinner =(userWin, userChoice ,computerChoice) => {
    if(userWin){

        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText=`You Won the game Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText=`You Lose ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playGame= (userChoice) => {
   console.log("user Choice = ",userChoice);
   const computerChoice=genComputerChoice();
   console.log("Computer Choice = ",computerChoice);

   if(userChoice===computerChoice){
     drawGame();
   }
   else {
      let userWin=true;
      if(userChoice==="rock"){
         userWin= computerChoice ==="paper" ? false : true;
      }
      else if(userChoice==="paper"){
        userWin= computerChoice ==="scissors" ? false : true;
      }
      else{
        userWin= computerChoice ==="rock" ? false : true; 
      }
      showWinner(userWin, userChoice ,computerChoice);
   }
};

choices.forEach((choice) =>{
   console.log(choice);
   choice.addEventListener("click" ,() => {
         const userChoice=choice.getAttribute("id");
         const computerChoice=genComputerChoice();
         playGame(userChoice);
   });
});


