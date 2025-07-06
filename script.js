const board = document.querySelector(".game");
let winnCondition=document.querySelector(".winning-condition");
let restart = document.querySelector("button");
let isTurn = "X";

let total =0;
const winners = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Center column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal
        [2, 4, 6]  // Diagonal
];
const board_array = new Array(9).fill("E");
function checkWinner(){
    for(let [index0,index1,index2] of winners){
            
            if(board_array[index0] !="E" && board_array[index0]===board_array[index1] && board_array[index0]===board_array[index2]){
                return 1;
            }
    }
    return 0;
}
const printer = (event)=>{
    const element = event.target;
    if(board_array[element.id]==="E"){
        total++;
        if(isTurn==="X"){
            element.innerHTML = "X";
            board_array[element.id] = "X";
            console.log(board_array[element.id]);
            if(checkWinner()){
             winnCondition.innerHTML = " winner X";
             board.removeEventListener("click",printer);
             return;
            }
             isTurn = "O";
        }else{
            element.innerHTML = "O";
            board_array[element.id] = "O";
            if(checkWinner()){
             winnCondition.innerHTML = " winner O";
             board.removeEventListener("click",printer);
             return;
            }
            console.log(board_array[element.id]);
            isTurn = "X";
        }
       if(total==9){
        winnCondition.innerHTML = "match is draw";
       }
    }
}
board.addEventListener("click",printer);
restart.addEventListener("click",()=>{
    const cell =  document.getElementsByClassName("cell");
    Array.from(cell).forEach((value)=>{
          value.innerHTML = "";
    })
    total =0;
    turn = "X";
    board_array.fill("E");
    winnCondition.innerHTML = "";
    board.addEventListener("click",printer);
})