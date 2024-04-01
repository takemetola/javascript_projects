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



//--------------------------------------------------------------------------

//STRING METHODS

/*
let userName = "DUMBuldoras";

//console.log(userName.charAt(6));
//console.log(userName.indexOf("u"));
//console.log(userName.length);
//console.log(userName.trim());
//console.log(userName.toLocaleUpperCase());
//console.log(userName.toLocaleLowerCase());
//console.log(userName.repeat(20));
//console.log(userName.startsWith("D"));
//console.log(userName.endsWith("s")); //BOOLEAN
//console.log(userName.includes("f")); // BOOLEAN

//console.log(userName.replace("D", "A"));

let phoneNumber = "123-456-7890";

//phoneNumber = phoneNumber.padStart(20, "000");

console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(20, "000");

console.log(phoneNumber);

*/


//--------------------------------------------------------------------------


//String slicing
/*
const fullName = "Tomasauskas Tomukas";


let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 14); // Don't necessary need the ending index to reveive result
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);



let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);



const email = "tomas@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf("@")+1, email.indexOf("."));


console.log(username);
console.log(domain);

*/


//--------------------------------------------------------------------------


//METHOD CHAINING
/*
let userName = window.prompt("Ener your username:");

userName = userName.trim();

let letter = userName.charAt(0);

letter = letter.toLocaleUpperCase();

let extraChar = userName.slice(1);

extraChar = extraChar.toLocaleLowerCase();

userName = letter + extraChar;

console.log(userName);


userName = userName.trim().charAt(0).toLocaleUpperCase() + userName.trim().slice(1).toLocaleLowerCase();

console.log(userName);

*/


//--------------------------------------------------------------------------

/* LOGICAL OPERATORS


// AND = &&
// OR = ||
// NOT = !

//BOTH have to be true
const temp = 2;

if (temp > 0 && temp <= 30) {
    console.log("The weather is perfect!")
}
else {
    console.log("The weather is bad.")

}



const temp2 = 2;

if (temp2 > 0 || temp2 <= 30) {
    console.log("The weather is perfect!")
}
else {
    console.log("The weather is bad.")

}



const isSunny = true;

if(!isSunny){
    console.log("Sauleta");
}
else {
    console.log("Nesauleta");
}

*/

//--------------------------------------------------------------------------


//ARRAY
/*
let names = ["Bimas", "Rikis", "Uzi"];

names[3] = "namiokas";

names.push("nameselis"); // ADDS TO THE END
names.pop(); // Removes the last element
names.unshift("nameselis"); // adds element to the beginning of the array
names.shift(); // removes an element from the beggining

let index = names.indexOf("roko"); // if element is not found it will return -1

console.log(index);



console.log(names[0]);

for(let i = 0; i< names.length; i++){
    console.log(names[i]);
}
// REVERSE DISPLAY
for(let i = names.length - 1; i>= 0; i--){
    console.log(names[i]);
}


//SHORTCUT OF DISPLAYING ARRAY
for(let name of names){
    console.log(name);
}

names.sort(); //SORTS IN ALPHABETICAL METHOD
names.sort().reverse(); // REVERSES

*/

//--------------------------------------------------------------------------


//SPREAD OPERATOR
/*
let numbers = [0, 2, 3, 4, 5, 6];
let maximum = Math.max(...numbers); // ... unpacks elements in an array
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username = "Tomas Tomauskas";
let letters = [...username].join("."); // adds . after each leter

console.log(letters);

let fruits = ["apple", "pear", "banana"];
let newFruits = [...fruits];
let vegetables = ["carrots", "patata", "gurke"];

let foods = [...fruits, ... vegetables, "eggs", "BREAD"];

console.log(fruits);
console.log(newFruits);
console.log(foods);

*/

//--------------------------------------------------------------------------

// rest parameters (...rest) allow a function to work with a varaubke number of arguments by putting them into an array


/*
function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "kugelis";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4);

console.log(foods);



function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

//const total = sum(1,1,1,1);

//console.log(`Your total is ${total}`);

function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const avg = getAverage(75,100,85,99);

console.log(`Your average is ${avg}`);


function combineStrings(...names){
    return names.join(" ");
}



const fullName = combineStrings("Mr.","Homer","Simpson","Junior");

console.log(fullName);

*/

//--------------------------------------------------------------------------


// callback = a function that is passed as an argument to another function.


// calling a function within a function;
/*
hello(bye);


function hello(callback){
    console.log("Hello!");
    callback();
}

function bye(){
    console.log("Bye!");
}
*/
/*
sum(displayPage, 5, 5);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH2").textContent = result;

}
*/


//--------------------------------------------------------------------------


// forEach() = method to iterate over the elements of an array and apply a function
// (callback) to each element array.forEach(callback);
//                              element, index, array are provided
/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(squared);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function squared(element, index, array){
    array[index] = Math.pow(element, 2);
}

function display(element){
    console.log(element);
}

*/

/*
let fruits = ["banana", "apple", "pear", "mango"];

fruits.forEach(capitalize);

fruits.forEach(display);

function toUpperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element) {
    console.log(element);
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}

*/