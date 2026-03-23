let score = "33";

console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33abc" => NaN
/*
    in bool 
    1 => true
    2 => false
*/
let value = 23;
let negValue = -value;
console.log(negValue);

// all basics operation are work

let str1 = "yash";
let str2 = "mungra";

let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32
/* 
    if string first than treat all as a string.
    and if string last than simplyfy the equestion and add to string.
*/

console.log(+true); //1
console.log(+""); //0

let gameCounter = 100;
gameCounter++; //postfix
++gameCounter; //prefix

/* postfix
    fist store or print value then increment by 1
*/
/* prefix
    first inctrement by 1 and then store or print
*/

console.log(gameCounter);