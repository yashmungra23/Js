function myName(){
    console.log("yash");
}

myName  // referance
myName() // execution

// Add two number function

function add2umbers(num1 , num2){
    let sum = num1 + num2;
    return sum;
}

add2umbers(); // NaN
const SUM = add2umbers(4 , 5);
console.log(SUM); // 9

function loggedIn(user){
    return `${user} just logged in`
}

console.log(loggedIn("yash")); // yash just logged in 

