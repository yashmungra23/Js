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

function calaulateCartPrice(...num1){
    return num1;
}

console.log(calaulateCartPrice(23,45,45,78,89));
// [ 23, 45, 45, 78, 89 ]

function calaulateCart(value1, value2, ...num){
    return num;
}

console.log(calaulateCart(400,3,2,12)); // [ 2, 12 ]

// object passeed to the function

const user = {
    name : "JS",
    price : "14 $"
}

function handleObject(anyobject){
    console.log(`Course name is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user); // Course name is JS and price is 14 $

// array passed to the function

const arr = [45,658,758,78];

function arrelements(getArray){
    return getArray;
}

console.log(arr); // [ 45, 658, 758, 78 ]

