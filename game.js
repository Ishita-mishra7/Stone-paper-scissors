let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const restartBtn=document.querySelector("#restart-button");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="game draw.Play again:)";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
       
        msg.innerText=`you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
       
        msg.innerText=`you lost:( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}


};
function restartGame(){
    userScorePara.innerText="0";
    compScorePara.innerText="0";
    msg.style.backgroundColor="green";
    msg.innerText="Play your move:)";
    console.log("userScorePara=",userScorePara.innerText);
    console.log("compScorePara=",compScorePara.innerText);

};
restartBtn.addEventListener("click",restartGame);


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");

        playGame(userChoice);
    });

});
