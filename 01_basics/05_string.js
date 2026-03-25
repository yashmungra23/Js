const name = "Yash"
const countRepo = "2"

// console.log(name + countRepo) //don't use

console.log(`Hello my name is ${name} and my repo count is ${countRepo}`);

const gameName = new String('Egokiller=yash');

console.log(gameName[0]);
console.log(gameName.__proto__); //prototype

console.log(gameName.length); //length
console.log(gameName.toUpperCase); //upper case

//usefull string functions.......

//indexOf()
console.log(gameName.indexOf('k')); //give index of charcter.

//charAt()
console.log(gameName.charAt(4)); //give char.. at given ingex.

const string = "I am learning JavaScript."

//charCodeAt() at means any index
console.log(`Character code ${string.charCodeAt(6)} is equal to ${string.charAt(6)}`);
//give char.. code for given index

//codePointAt()
const icons = "☃★♲";
console.log(icons.codePointAt(1));
// Expected output: "9733"

//concate()
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(" ", str2));
// Expected output: "Hello World"
console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"

//substring()
const newString = string.substring(0, 9);
console.log(newString);

//slice()
const anotherString = string.slice(0, 4);
console.log(anotherString);

//trim()
const name2  = "    yash    "
console.log(name2);
console.log(name2.trim());
// you can use starttrim() and endtrim()

//replace()
const url = "https://yash.com/yash%15mungra"
console.log(url.replace('%15','-'));

//includes()
console.log(url.includes('yash'));

//split()
console.log(gameName.split('='));

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//you can use this link to learn more functions of string