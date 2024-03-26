let bdayPerson = "Mutzininke";
let answer;
let answerYes = "yes";
let isRunning = true;
const noteSymbol = '\u266B';
const note3x = noteSymbol + noteSymbol + noteSymbol;

function happyBday() {
    console.log(`${note3x} Happy birthday to you, happy birthday to you \n${note3x} happy birthday, dear ${bdayPerson.toLocaleUpperCase()}, HAPPY BIRTHDAY TO YOUUU!!! ${note3x} \nPew pew pew (*sounds of firewords and claps)\n\n\n HAVE A BEAUTIFUL DAY!!! CHEERS BYE!`);
}

while (isRunning) {


    answer = window.prompt("Perhaps it is your birthday today?");
    if (answer === answerYes) {
        window.alert("Check the console you beautiful thaaang xx");
        happyBday();
        isRunning = false;
    }
    else {
        window.alert(`Come back tomorrow, ${bdayPerson.toLocaleUpperCase()}!`);
    }

}