let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
let para=document.querySelector("#msg");
const you=document.querySelector("#your");
const comp=document.querySelector("#comp");
const gameWinner=(userWin,userID,compID)=>{
     if(userWin){
        userScore++;
        you.innerText=userScore;
        para.innerText=`You Win! your ${userID} beats comp ${compID}`;
        para.style.backgroundColor="green";
     }
     else{
        compScore++;
        comp.innerText=compScore;
        para.innerText=`You Lose comp ${compID} beats your ${userID}`;
        para.style.backgroundColor="red";
     }
}
const gameDraw=()=>{
    para.innerText="Match Draw";
    para.style.backgroundColor="#081631";
}
const genCompchoice=()=>{
    let option=["rock","paper","scissor"];
    const randInd=Math.floor(Math.random()*3);
    return option[randInd];
}
const playgame=(userID)=>{
     const compID= genCompchoice();
     if(userID===compID){
        gameDraw();
     }

     else{
        userWin=true;
        if(userID==="rock"){
         userWin=compID==="paper"?false:true;
        }
        else if(userID==="paper"){
            userWin=compID==="rock"?true:false;
        }
        else{
            userWin=compID==="paper"?true:false;
        }
        gameWinner(userWin,userID,compID);
       }
     }

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userID=choice.getAttribute("id");
        playgame(userID);
    })
})
