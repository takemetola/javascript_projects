//console.log('Hello');
//console.log('Hello2');

//window.alert("alert");
//window.alert("alert2");

//document.getElementById("myH1").textContent = 'Hello';
//document.getElementById("myP").textContent = 'Noriu pizza';

//--------------------------------------------------------------------------


// USER INPUT

//pop up promt

/*
let username = window.prompt("Provide username");

console.log(username);
*/



//HTML box input

/*    let username;

document.getElementById("buttonSubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hallo, ${username}`
    console.log(username);
}

*/


//--------------------------------------------------------------------------



//TYPE CONVERSION

/*let age = window.prompt("Type in your age:");
age = Number(age); //convert string to int
age+=1;
console.log(age, typeof age);

*/


//--------------------------------------------------------------------------

//Const variable

/*let pi = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius =document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
*/


//--------------------------------------------------------------------------

//MATH

/*
let x = 225.5;
let y = 22;

//z =Math.round(x); //rounds to closest
//z =Math.floor(x); //always rounds down
//z =Math.ceil(x); // always rounds up
//z =Math.trunk(x); //eliminates any decimal
//z =Math.pow(x, y); //power of number
//z= Math.abs(x); // eliminates negative
//z= Math.min(x,y); //display min value of the list works with max






console.log(z);
*/

//--------------------------------------------------------------------------




//TERNERY OPERATOR


//SAME AS USING IF ELE

/*let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);


let time = 16;
let greeting = time < 12 ? "Good morning" : "Good Afternoon";
*/

//--------------------------------------------------------------------------

// IF USING ALOT OF IF ELSE YOU CAN TRY USING SWITCH

/*
let day = "pizza";

switch (day) {
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    default:
        console.log(`${day} is not a correct value`);
}



let testScore = 60;
let grade;

switch (true) {
    case testScore >= 90:
        grade = "A";
        break;
    case testScore >= 80:
        grade = "B";
        break;
    case testScore >= 70:
        grade = "C";
        break;
    case testScore >= 60:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(grade);
*/