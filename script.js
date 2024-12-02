
let name = "John Doe";
let age = 25;
let isStudent = true;
let fruits = ["Apple", "Banana", "Cherry"];
const person = { name: "Mwanik", age: 23 };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is Student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Fruits: ${fruits} (Type: ${typeof fruits})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

console.log("\n**Part 1: Operators - Simple Calculator**");

function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter numbers.");
        return;
    }

    let result;
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    } else {
        alert("Invalid operation.");
        return;
    }

    alert(`Result: ${result}`);
}

calculator();



function greetUser(userName) {
    return `Hello, ${userName}! Welcome to JavaScript learning.`;
}

document.getElementById("dynamic-content").innerHTML = `<p>${greetUser("John")}</p>`;


function checkVotingEligibility() {
    let userAge = parseInt(prompt("Enter your age:"));

    if (isNaN(userAge)) {
        alert("Please enter a valid number for your age.");
    } else if (userAge >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote.");
    }
}

checkVotingEligibility();


let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}


let heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
