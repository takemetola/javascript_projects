let minNum = 1;
let maxNum = 10;
let counter = 0;
let currentScore = 0;
let bestScore;

let running = true;
let answer = Math.floor(Math.random() * (maxNum - minNum) + minNum);

while (running) {
    let guess = window.prompt(`Guess a NUMBER between ${minNum} - ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert(`Invalid input. Type in a NUMBER between ${minNum} - ${maxNum}`);
    } 
    else if(guess > answer){
        window.alert("Guess lower");
        counter++;
        currentScore++;
    }
    else if(guess < answer){
        window.alert("Guess higher");
        counter++;
        currentScore++;
    }
    else if (guess === answer) {
        window.alert(`You are right! It took you: ${counter} tries.`);
       currentScore = bestScore;
       counter = 0;
        if (currentScore < bestScore) {
            bestScore = currentScore;
        }
      
    } else {
        window.alert("Try again!");
    }
    console.log(`Guess: ${guess}, Answer: ${answer}, Counter: ${counter}, Current score: ${currentScore} Bestscore: ${bestScore}`);
}