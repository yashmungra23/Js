// NUMBERS
const score = 4;
console.log(score); // 4

const dob = new Number(23);
console.log(dob); // [Number: 23]

console.log(dob.toString().length); //2
console.log(dob.toFixed(2)); //23.00

const otherNumber = 450.655;
console.log(otherNumber.toPrecision(4)); // 450.7

const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); //1,00,000

// MATHS
console.log(Math);
console.log(Math.abs(-23));
console.log(Math.round(232.56));
console.log(Math.ceil(232.56)); //233
console.log(Math.floor(232.56)); //232
console.log(Math.min(1,3,5,4,-1,5)); //-1
console.log(Math.max(4,2,95,4,3,23,22,4545));//4545

console.log(Math.random()); //random number b/w 0 to 1
console.log("Role the dice.");
console.log(Math.round(Math.random()*6) + 1);

// you can define min and max
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math
// link for Number and math