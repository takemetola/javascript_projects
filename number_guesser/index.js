const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let tries = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Try to guess a number ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a NUMBER");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}`);
    }
    else {
        tries++;
        if (guess < answer) {
            window.alert("Got to go HIGHER!");
        }
        else if (guess > answer) {
            window.alert("Got to go LOWER!");
        }
        else {
            window.alert(`YOU GOT IT! The number was indeed ${answer}. It took you ${tries} tries.`);
            running = false;
        }
    }
}
