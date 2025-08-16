var myName = "Wayne";

let myAge = "19";

const PI = 3.1416;

let isStudent = myAge < 20;

let person = {
    name: "Juchan",
    age: 20,
    address: {
        city: "Davao",
        country: "Philippines"
    }
};

let colors = ["red", "blue", "green", "yellow", "purple", "red"];

let words = ["apple", "banana", "cherry"];
let newArray = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let reversed = "";
    
    for (let j = word.length - 1; j >= 0; j--) {
        reversed = reversed + word[j];
    }
    
    newArray.push(reversed.toUpperCase());
}

console.log(newArray);

let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let result = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 19) {
        result.push(num);
        count++;
    }
}

console.log("Found " + count + " numbers: [" + result + "]");