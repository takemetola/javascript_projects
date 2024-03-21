const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myLabel2 = document.getElementById("myLabel2");
const min = 1;
const max = 6;

let randomNum;
myLabel.textContent = "⚀";
myLabel2.textContent =  "⚅";
myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
        if(randomNum==1){
            myLabel.textContent = "⚀";
        } else if(randomNum==2){
            myLabel.textContent = "⚁";
        } else if(randomNum==3){
            myLabel.textContent = "⚂";
        } else if(randomNum==4){
            myLabel.textContent = "⚃";
        }else if(randomNum==5){
            myLabel.textContent = "⚄";
        }else {
            myLabel.textContent = "⚅";
        }
        randomNum2 = Math.floor(Math.random() * max) + min;
        if(randomNum2==1){
            myLabel2.textContent = "⚀";
        } else if(randomNum2==2){
            myLabel2.textContent = "⚁";
        } else if(randomNum2==3){
            myLabel2.textContent = "⚂";
        } else if(randomNum2==4){
            myLabel2.textContent = "⚃";
        }else if(randomNum2==5){
            myLabel2.textContent = "⚄";
        }else {
            myLabel2.textContent = "⚅";
        }
        }
       
    
    

























//--------------------------------------------------------------


//MIN MAX range random number

/*
const min = 50;
const max = 100;

let randomNum = Math.floor(Math.random() * (max- min)) + min;

console.log(randomNum);
*/