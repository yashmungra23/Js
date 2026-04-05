//Globle scope
let a = 50;

// block scope
if(true){
    let a = 20;
    let c = 30;
    const d = 50;
    console.log("INNER : ",a );
}

console.log(a); //
// console.log(c); // give an error
// console.log(d); // give an error

// nested scope

function one(){
    const userName = "YASH";
    function two(){
        const age = 18;
        console.log(userName);
    }
    // console.log(age); // out of scope

    two();
}

one();

if(true) {
    const name = "yash";
    if(true){
        const age = 18;
        console.log(name + " Age is :" , age); // return yash Age is 18
    }
    // console.log(age); // out of scope
}

// ======================================================================================= 
console.log("===========================================");

console.log(addone(10)); // output 11 

function addone(num){
    return num + 1;
}

// console.log(addTwo(10)) // gives an error

const addTwo = function(num){
    return num + 2;
}
// this is veriable function

console.log(addTwo(10)); // output 12