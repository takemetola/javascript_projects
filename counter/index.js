const decreaseButton = document.getElementById("decreaseButton");
const  increaseButton= document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseButton.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function(){
    if (count > 0)
    count--;
    countLabel.textContent = count;
   
}

resetButton.onclick = function(){
    count = 0;
    countLabel.textContent = count;
   
}