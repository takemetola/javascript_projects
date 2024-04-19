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

//--------------------------------------------------------------------------

// .map() = accepts a callback and applies that function to each element of an array, then returns a new array

/*
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);

const cubes = numbers.map(cube);

console.log(cubes);



function square(element){
    return Math.pow(element, 2);

}

function cube(element){
    return Math.pow(element, 3);

}

*/

/*
const students = ["Bob", "Mark", "Sandy", "Kevin"];

const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}
*/

/*
const dates = ["2024-1-11", "1992-06-14", "1986-12-16"];

const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}}`;

}
*/

//--------------------------------------------------------------------------

// .filter() creates a new array by filtering out elements

/*
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}
*/
/*
const ages = [16, 14, 18, 19, 29, 15];

let isAbove = ages.filter(isOver18);

console.log(isAbove);

function isOver18(element) {
    //  if (element >= 18)
    // return element
    return element >= 18;
}
*/
/*
const words = ["banana", "avocado", "orange", "pear", "coconut", "watermeloni"];
let shortWords = words.filter(getShortWords);

console.log(shortWords);

function getShortWords(element){
    return element.length <= 6;
}
*/
//--------------------------------------------------------------------------


// .reduce() method reduces the elements of an arary to a single value;

/*
const prices = [9,18.99,20.25,25,26,99];

const total = prices.reduce(sum);

console.log(`€${total.toFixed(2)}`);

function sum(previous, next){  //it keeps adding elements until no left
    return previous + next;
}

*/

/*
const grades = [100,25,75,65,99];

const maxScore = grades.reduce(getMax);

console.log(maxScore);

function getMax(accu, element){
    return Math.max(accu, element);
}

*/

//--------------------------------------------------------------------------


// function declaration = define a reusable block of code that performs a specific task
// function expressions = a way to define functions as values or variables
/*
setTimeout(function(){
    console.log("Hello");}, 3000);
*/

/* const numbers = [1, 2, 3, 4, 5, 6];
const cube = numbers.map(function (element) {
    return Math.pow(element, 3);
}
);
console.log(cube);

const evenNumbs = numbers.filter(function(element){
    return element % 2 === 0;
})

console.log(evenNumbs);


const total = numbers.reduce(function(accu, element){
    return accu + element;
})

console.log(total); */


//--------------------------------------------------------------------------

// arrow function = way to write function expression (parameters) => some code


/*
const hello = function(){
    console.log("Hello!");
}

hello();

const hello2 = () => console.log("Hello");

hello2();

const hello3 = (name,age) => {console.log(`Hi, ${name}!`)
                        console.log(`You are ${age} years old`)};

hello3("Mutz", 32); */

/*
setTimeout(hello, 3000);

function hello(){
    console.log("Hello!");
}

setTimeout(function(){
    console.log("Hello2");
}, 3000);

setTimeout(() => console.log("Hello3"), 3000); */

/* const numbers = [1, 2, 3, 4, 5, 6,];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const oddNum = numbers.filter((element) => element % 2 !== 0);
const evenNum = numbers.filter((element) => element % 2 === 0);
const sumNum = numbers.reduce((accu, element) => accu + element);


console.log(squares);
console.log(cubes);
console.log(oddNum);
console.log(evenNum);
console.log(sumNum);
 */

//--------------------------------------------------------------------------

// object = a collection of related properties and/or methods. object = {key:value,function()};


/* const person1 = {
    firstName: "Bob",
    lastName: "Marley",
    age: 30,
    isEmployed: false,
    sayHello: function(){console.log("Haya, buddy")},
}

console.log(person1.firstName);
console.log(person1.isEmployed);
person1.sayHello();

const person2 = {
    firstName: "Kate",
    lastName: "White",
    age: 33,
    isEmployed: true,
    sayHello: function(name){console.log(`Good afternoon ${name}`)},
    sayBye: (name) => console.log(`Später ${name}`),
}

console.log(person2.firstName);
console.log(person2.isEmployed);
person2.sayHello("Muutz");
person2.sayBye("Mutzininke");
 */



//--------------------------------------------------------------------------

// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

/* const person1 = {
    name: "Bob",
    faveFood: "pasta",
    sayHello: function () { console.log(`Hi! I am ${this.name}`) },
    //sayHello: function(){console.log(`Hi! I am ${person1.name}`)}, its the same as above
    //eat: function(){console.log(`I like to eat ${this.faveFood}`)}
    eat: function () { console.log(`I like to eat ${person1.faveFood}`) }

    // this.name doesnt work with () =>


}

person1.sayHello();
person1.eat(); */

//--------------------------------------------------------------------------



// constructor = special method for defining the properties and methods of object

/* function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You drive ${this.color} ${this.make} ${this.model} made in ${this.year}`)}
}

const car1 = new Car("Nissan", "Skyline", 1990, "blue");
const car2 = new Car("Honda", "CBR", 2000, "black");
const car3 = new Car("Ford", "Mustag", 1978, "grey");


car1.drive();
car2.drive();
car3.drive(); */

//--------------------------------------------------------------------------

// class = (ES6 feature) provides a more stuctured and cleaner way 
// to wirk with objects compared to traditional constructor functions
// for example: static keyword, encapsulation, inheritance

/* class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}€`);
    }

    calculateTotal(vatTax){
        return this.price + (this.price * vatTax)
    }
}

const vatTax = 0.2;

const product1 = new Product("Shirt", 29.99);
const product2 = new Product("Leggings", 10.90);
const product3 = new Product("Underwear", 49.90);



product1.displayProduct();


const total = product1.calculateTotal(vatTax);

console.log(`Total price (with tax): ${total.toFixed(2)}€`); */


//--------------------------------------------------------------------------


// static = a keyword that defines properties or methods that belong to a
// class itself rather than the objects created from that class (class owns
//     anything static, not the objects)

/* class mathUtil {
    static PI = 3.14159;

    static getDia(radius) {
        return radius * 2;
    }

    static getCircum(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(mathUtil.PI);
console.log(mathUtil.getDia(10));
console.log(mathUtil.getCircum(10));
console.log(mathUtil.getArea(10)); */


/* class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hey, my name is ${this.username}`)
    }

    static getUserCount(){
        console.log(`There are ${this.userCount} people at home`)
    }
}

const user1 = new User("Bob");
const user2 = new User("Meg");
const user3 = new User("Greg");

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount(); */


// inheritance = allows a new class to inherit properties and methods
// from an existing class (parent -> child) . REUSABILITY


//--------------------------------------------------------------------------



/* class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
    swim(){
        console.log(`This ${this.name} is swimming.`);

    }
}

class Bat extends Animal{
    name = "bat";
    run(){
        console.log(`This ${this.name} is running.`);
    }
}

class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming.`);

    }
}

class Lizard extends Animal{
    name = "lizard";
    crawl(){
        console.log(`This ${this.name} is crawling.`);

    }
}

const bat = new Bat();
const fish = new Fish();
const lizard = new Lizard();

console.log(bat.alive);

bat.eat();
fish.sleep();
lizard.eat();

bat.run();
fish.swim();
lizard.crawl();
lizard.swim();

 */


//--------------------------------------------------------------------------


// super = keyword is used in classes to call the constructor or acess 
// the properties and methods of a parent (superclass)
// this = this Object
// super = the parent

/* class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} can move at ${speed}km/h`);
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;

    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal {

    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal {

    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 1, 10);
const fish = new Fish("fish", 1, 15);
const hawk = new Hawk("hawk", 5, 30);

console.log(rabbit.runSpeed);
console.log(fish.swimSpeed);
console.log(hawk.flySpeed, hawk.age, hawk.name);

rabbit.run();

hawk.fly();
 */

//--------------------------------------------------------------------------


// getter = special method that makes a property Readable
// setter = special method that makes a property writable
// validate and modify a value when reading/writing a property



/* class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("Width must be a positive num");
        }
    }

    set height(newHeight) {
        if (newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive num");
        }
    }
    get width() {
        return this._width.toFixed(1) + " cm";
    }

    get height() {
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }

}

const rectangle = new Rectangle(3, 4);


rectangle.width = 6;
rectangle.height = 6;


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
 */



/* class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a string");
        }
    }

    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a string");
        }
    } 

    set age(newAge) {
        if (newAge > 0 && newAge < 120) {
            this._age = newAge;
        }
        else {
            console.error("Age must be a number greater than 0");
        }
    }

    get firstName(){
        return this._firstName;
    }

     get lastName(){
        return this._lastName;
    } 

    get age(){
        return this._age;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

}


const person = new Person("Gloria", "Blue", 119);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);
 */

//--------------------------------------------------------------------------


// destructuring = extract values from arrays and objects, then assign them to variables in a 
// convenient
// [] = to perform array destructuring
// {} = to perform object destructuring

// SWAP the values of two variables

/* let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);


const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); */


// ASSIGN array elements to variables

/* const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); */

/* const person1 = {
    firstName: "Monica",
    lastName: "Belluci",
    age: 22,
    job: "Chef"
}

const person2 = {
    firstName: "Chad",
    lastName: "Mongo",
    age: 22,
}

const {firstName, lastName, age, job="undo"} = person1; // job was undefined so u can do that like this

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); */

// EXTRACT values from objects

/* function displayPerson({firstName, lastName, age, job="Driver"}){
    console.log(`name ${firstName} ${lastName}`);
    console.log(`age ${age}`);
    console.log(`job ${job}`);
}

const person1 = {
    firstName: "Monica",
    lastName: "Belluci",
    age: 22,
    job: "Chef"
}

const person2 = {
    firstName: "Chad",
    lastName: "Mongo",
    age: 22,
}
displayPerson(person1);

displayPerson(person2);

 */



//--------------------------------------------------------------------------


// nested object = objects inside of other Objects.
// allows you to represent more complex data structures
// Child Object is enclosed by a parent object

// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}};

/* const person = {
    fullName: "Bobby Lee",
    age: 45,
    isStudent: false,
    hobbies: ["comedy", "tv", "jokes"],
        address: {
            street: "Bollywood ave",
            city: "LA",
            country: "USA"
        }
}

for(const property in person.address){
    console.log(person.address[property])
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address.street);


// to loop through nested object
for(const property in person.address){
    console.log(person.address[property])
}

 */

/* class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age  = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Bob", 40, "123 Cook st", "LA", "USA");
const person2 = new Person("Mark", 69, "555 Cook st", "MIAMI", "CANADA");
const person3 = new Person("John", 69, "001 Cook st", "NY", "MEXICO");

console.log(person1.name); */

//--------------------------------------------------------------------------


// Array of objects

/* const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "pear", color: "gree ", calories: 101},
                {name: "avocado", color: "brown", calories: 150},
                {name: "banana", color: "yellow", calories: 120}];
 */


//fruits.push({name:"strawberry", color: "black", calories: 23}); // adds an element to the end

//fruits.pop(); // removes the last element

//fruits.splice(0,3 ); // array.splice(start, deleteCount, item1, item2, ...);

//fruits.forEach(fruit => console.log(fruit.calories)); // loop through the elements of the array

//const fruitNames = fruits.map(fruit => fruit.name);

//console.log(fruitNames);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories <= 110);

// console.log(lowCalFruits);

//console.log(fruits);

/* const maxFruit = fruits.reduce((max, fruit) => 
fruit.calories > max.calories ? fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
fruit.calories < min.calories ? fruit : min);

console.log(maxFruit);
console.log(minFruit); */


//--------------------------------------------------------------------------


// scrollTo() = method used to sort elements of an array in place.an
//                 sorts elements as strings in lexicographic ondragover, not alphabetical
//                 lexicographic = (alphabet + numbers + symbols) as strings


//let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
/* let numbers = [99,105, 5,8,66,11,44]; //numbers treated as a string

numbers.sort((a, b) => a - b); // sorts numbers from lowest to highest

console.log(numbers);

const people = [{name:"Bob", age:33, gpa: 2.5},
                {name:"Andy",age:22, gpa: 3.5},
                {name:"Cris", age:35, gpa: 4.0},]

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);


people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people); */


//--------------------------------------------------------------------------

// Shuffling elements in an array

/* const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

//cards.sort(() => Math.random() - 0.5); //one way to shuffle an array , the bigger an array
// the more inefficient it becomes

shuffle(cards);

console.log(cards);

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}
 */


//--------------------------------------------------------------------------


// Date objects = objects that contain values that represent dates and time
// these date objects can be changed and formatted

// date(year, month, day, hour, minute, second, ms)

//const date = new Date(2024, 0, 1, 2, 3, 4, 5);
//const date = new Date("2023-02-03T13:00:30Z"); // Z is for UTC time
//const date = new Date(17000000000000); // when computer thinks time started, pass in ms

/* const date = new Date();

const year = date.getFullYear();
const month = date.getMonth()
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWk = date.getDay();


console.log(year);
console.log(month); // January is 0 thats why
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWk); // Sunday is 0, Monday is 1 etc

date.setFullYear(2026);
date.setMonth(2);
console.log(date); */


// Date compare
/* const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
    console.log("Happy NY");
} */

//--------------------------------------------------------------------------


// // closure = a function defined inside of another function,
//             the inner function has access to the variables
//             and scope of the outer function.
//             Allow for private variables and state maintenance.


/* function outer(){

    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}

message = "Goodbye";

outer(); */


/* function createCounter(){

    let count = 0;
    function increament(){
        
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increament, getCount};
}

const counter = createCounter();

counter.increament();
counter.increament();
counter.increament();


console.log(`The current count is ${counter.getCount()}`) */

/* function createGame() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`)
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore() {
        return score;
    }
    return { increaseScore, decreaseScore, getScore };
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(1);
game.decreaseScore(1);
game.increaseScore(5);



console.log(`You have currently ${game.getScore()}pts`);

 */

//--------------------------------------------------------------------------


// setTimeout() = function in JavaScript that allows you to schedule 
// the execution of a function after an amount of time (ms) 
// times are approximate (varies based on the workload of the JavaScript runtime env)

// setTimeout(callback, delay);
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

// function sayHello() {
//     window.alert("Hello");
// }

//setTimeout(sayHello, 3000);

//setTimeout(() => window.alert("hello"), 3000);

// const timeoutId = setTimeout(() => window.alert("hello"), 3000);

// clearTimeout(timeoutId);

/* let timeoutId;

function startTimer(){
    timeoutId =setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");

} */


//--------------------------------------------------------------------------

// ES6 Module = an externa file that contains reusable code that can be imported
// into other JavaScript files. Write reusable code for many different apps.
// Can contain varaibles, classes, functions... and more 

//     <script type="module" src="index.js"></script> this line in index.html

/* import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);

console.log(circumference);

const area = getArea(10);

console.log(area);

const volume = getVolume(10);

console.log(volume); */


//--------------------------------------------------------------------------


//synchronous = executes line by line consecutively in a sequential manner
// code that waits for an operation to complete

//asynchronous = allows multiple operations to be performed concurrently without waiting
//                  doesn't block the execution flow and allows the program to continue
// (1/0 operations, network requests, fetching data)
//  handled with: callbacks, Promises, Async/Await


/* function func1(callback){
    setTimeout(() => {console.log("Task1"); callback()}, 3000); // setTimeout() is one of async calls

}

function func2(){
    console.log("Task2")
    console.log("Task3")
    console.log("Task4")
    
}

func1(func2);
 */

//--------------------------------------------------------------------------


// Error = an object that is created to represent a problem that occurs
// try { } = encloses code that might potencially cause an error
// catch { } = catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up ex Close files, close connections , release resources

/* try {
    console.log(x);
}
catch(error){
    console.error(error);
}

finally{
    // CLOSE FILE
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}


console.log("You have reached the ened!");
 */


/* try {
    const dividend = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if(divisor == 0){
        throw new Error("You can not divide by zero");
    }

    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("You must type in a number");
    }
    const result = dividend / divisor;
    
    console.log(result); 
}
catch(error){
    console.log(error);
}


console.log("This is the end.")
5 */

//--------------------------------------------------------------------------

//DOM - DOCUMENT OBJECT MODEL


/* const username = "Bob";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? ` Guest` : username;



console.dir(document);
 */

//--------------------------------------------------------------------------

// element selectors to manipulate HTML elements from the DOM

// 1. document.getElementById()  // element or NULL
// 2. document.getEelementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST


// 1. document.getElementById()  // element or NULL

/* const heading = document.getElementById("my-heading");

heading.style.backgroundColor = "orange";
heading.style.textAlign = "center";

heading.textContent = "CARS R US"

console.log(heading); */

// 2. document.getEelementsClassName() // HTML COLLECTION

/* const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "green";

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}

//fruits.forEach(); // HTML collections dont have .forEach() method

// Type casting as an Array
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "green";
});

console.log(fruits); */

// 3. document.getElementsByTagName() // HTML COLLECTION

/* const h4Elements = document.getElementsByTagName("h4");

h4Elements[0].style.backgroundColor = "orange";

for(let h4element of h4Elements){
    h4element.style.backgroundColor = "yellow";
}

const listElements = document.getElementsByTagName("li")

console.log(listElements);

//listElements[0].style.backgroundColor = "green";

Array.from(listElements).forEach(element => {
    element.style.backgroundColor = "darkgreen";
}); */


// 4. document.querySelector() // ONLY RETURNS THE FIRST ELEMENT OR NULL

/* const element = document.querySelector("ul");

element.style.backgroundColor = "red"; */

// 5. document.querySelectorAll() // NODELIST

/* const foods = document.querySelectorAll("li");

//fruits[1].style.backgroundColor = "purple";

foods.forEach(food => {
    food.style.backgroundColor = "purple";
}); */

//--------------------------------------------------------------------------


// DOM Navigation

// .firstElementChild
// .lastEelementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// .firstElementChild

/* const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
}) */

// .lastEelementChild

/* const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "purple"; */


// .nextElementSibling
// .previousElementSibling // works very similair to next...

/* const element = document.getElementById("veggies");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "red"; */


// .parentElement

/* const element = document.getElementById("banana");
const parent = element.parentElement;
parent.style.backgroundColor = "blue"; */

// .children

/* const element = document.getElementById("veggies");
const children = element.children;

console.log(children);

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
});

children[1].style.backgroundColor = "red"

*/


//--------------------------------------------------------------------------

// Manipulate HTML elements

//1. CREATE THE ELEMENT

// const newH1 = document.createElement("h1");

// //2. ADD ATTRIBUTES/PROPERTIES

// newH1.textContent = "I love pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

//3. Append Element to DOM 

//document.body.append(newH1);

//document.body.prepend(newH1);

//document.getElementById("box2").append(newH1);

//document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box3");

// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box"); //with no id as reference
// document.body.insertBefore(newH1, boxes[2]);

// REMOVE HTML

// document.getElementById("box2").append(newH1);

// document.getElementById("box2").removeChild(newH1);

// <li> LIST ITEM ELEMENT EXAMPLE

/* const newListItem = document.createElement("li");

newListItem.textContent = "coco";
newListItem.id = "coco";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "green";
// //document.body.prepend(newListItem);
// //document.getElementById("fruits").append(newListItem);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

document.getElementById("fruits").removeChild(newListItem); */

//--------------------------------------------------------------------------

// eventListener = listen for specific events to create interactive web 
//                 events: click, mouseover, mouseout,
//                 .addEventListener(event, callback);

/* const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");




myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "red";
    myBox.textContent = "pizza";
});

myBtn.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "don't press";
})

myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "red";
    myBox.textContent = "pizza";
})

 */

//--------------------------------------------------------------------------

/* const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

// document.addEventListener("keydown", event =>{
//     myBox.textContent = "😋";
//     myBox.style.backgroundColor = "yellow";
// });

// document.addEventListener("keyup", event =>{
//     myBox.textContent = "🥵";
//     myBox.style.backgroundColor = "tomato";
// });

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {

        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
        }

        myBox.style.top = `${5 *y}px`;
        myBox.style.left = `${5 *x}px`;

    }
}) */


//--------------------------------------------------------------------------


/* const myButton = document.getElementById("myBtn");
const myImage = document.getElementById("myImg");

myButton.addEventListener("click", event => {
    if (myImage.style.visibility === "hidden") {
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else {
        myImage.style.visibility = "hidden";
        myButton.textContent = "Show";
    }
}); */


//--------------------------------------------------------------------------


// NodeList = static collection of HTML elements by (id, class, element)
// can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList wont update automatically to refclect changes

//let buttons = document.querySelectorAll(".myBtn");

// ADD HTML/CSS PROPERTIES

/* buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😍";
}); */

// ADD Click event listener

/* buttons.forEach(button => {
    button.addEventListener("click", event =>{
        button.textContent += "🥵";
    });
})

buttons.forEach(button => {
    button.addEventListener("keydown", event =>{
        button.textContent -= "🥵";
    });
}); */

// ADD AN ELEMENT

/* const newButton = document.createElement("button");
newButton.textContent = "5";
newButton.classList = "myBtn";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myBtn");

console.log(buttons); */

// how to delete element from a node list

/* buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myBtn");
        console.log(buttons);
    })
}); */

//--------------------------------------------------------------------------

// classList = element property in JavaScript used to interact
// with an element's list of classes ( CSS classes)
// Allows you to make reusable classes for many elements
// across your webpage.

// add()
// remove()
// toggle() Remove if present , add if not
// replace(oldClass, newClass)
// contains() returns boolean

// const myBtn = document.getElementById("myBtn");
// const myH1 = document.getElementById("myH1");

/* myBtn.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
})

myBtn.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
}) */

/* myBtn.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myBtn.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
 */



/* myBtn.classList.add("enabled");
myH1.classList.add("enabled");


myBtn.addEventListener("click", event=>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😍";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }

});


myH1.addEventListener("click", event=>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "😍";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }

});
 */

/* et buttons = document.querySelectorAll(".myBtn");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event=>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event=>{
        event.target.classList.toggle("hover");
    });
}); */

//--------------------------------------------------------------------------

// Callback Hell = situation in JavaScript where callbacks
// are nested within other callbacks  to the degree where the code is
// difficult to read.
// Old pattern to handle asynchronous functions.
// Use Promises + async/wait to avoid Callback Hell

function task1(callback) {

    setTimeout(() => {
        console.log("Task 1 complete");
        callback();
    }, 2000);

}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 complete");
        callback();

    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 complete");
        callback();

    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 complete");
        callback();

    }, 1500);
}

task1(()=> {
    task1(()=>{
        task2(()=>{
            task3(()=>{
                task4(()=> console.log("All tasks complete"))
            })
        })
    });
});

