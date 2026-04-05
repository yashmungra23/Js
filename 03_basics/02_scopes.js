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