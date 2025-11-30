let boxes=document.querySelectorAll(".box");
let resetbt=document.querySelector("#reset-bt");
let newGameBtn= document.querySelector("#new-bt");
let msgConatiner= document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO= true; //playerX,playerO
let count=0;
const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8]
];

const  resetGame = () => {
    turnO=true;
    count=0;
    enableBoxes();
    msgConatiner.classList.add("hide");
    
}


boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false; 
        }
        else{
           box.innerText="X";
           turnO=true;
        } 
        box.disabled = true;
         count++;
        checkWinner();
    });

});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
         box.style.backgroundColor = ""; 
          box.classList.remove("win-box"); 
    }
};


const showWinner= (winner,patterns) => {
    msg.innerText=`congratulations,Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
     for (let index of patterns) {
        boxes[index].classList.add("win-box");
    }
};
const checkWinner = () => {
            for(let patterns of winPatterns ){
                  let posVal1=boxes[patterns[0]].innerText;
                  let posVal2=boxes[patterns[1]].innerText;
                  let posVal3=boxes[patterns[2]].innerText;
                  if(posVal1 !="" && posVal2 !="" && posVal3 !=""){
                     if(posVal1===posVal2&&posVal2===posVal3){
                        console.log("winner");
                        showWinner(posVal1,patterns);
                     }                                    
                  }
                }
                if (count === 9) {
    msg.innerText = "It's a Draw!";
    msgConatiner.classList.remove("hide");
}
        };

newGameBtn.addEventListener("click",resetGame);
resetbt.addEventListener("click",resetGame);