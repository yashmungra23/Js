// singleton

/*  A Singleton is a design pattern that ensures only one instance of a class/object exists
 in your entire application and provides a global point of access to it. 
 it means : You create something once, and every time you use it, you get the same object, not a new one.*/

// object literals

// declaration of symbol

const symbols = Symbol("key");

// object declaration 
const jsuser = {
    name : "yash",
    "full name" : "yash mungra",
    age : 18,
    [symbols] : "45-keyvalue",
    location : "surat",
    email : "yash@gmail.com",
    isLoggedin : false,
    lastLoginDays : ["sunday","monday"]
}   

console.log(jsuser.email); // simple method
console.log(jsuser["full name"]); // using square bracket
// How to acces symbols?

console.log(jsuser[symbols]); // 45-keyvalue
console.log(typeof symbols); // symbol

// overwrite the pervious value

jsuser.email = "yahh@gmail.com";
console.log(jsuser.email); // yahh@gmail.com

// you can freeze your detail useing this

Object.freeze(jsuser);
jsuser["full name"] = "yash";

console.log(jsuser["full name"]); // yash mungra

console.log(jsuser); // print full object\
/* {
  name: 'yash',
  'full name': 'yash mungra',
  age: 18,
  location: 'surat',
  email: 'yahh@gmail.com',
  isLoggedin: false,
  lastLoginDays: [ 'sunday', 'monday' ],
  Symbol(key): '45-keyvalue' // remember this
}
*/

// make an function /* when your object is freeze you can't acces the finction with object*/
// new object

const newObj = {
    username : "xyz",
    age : 18,
    emial : "xyz@gmail.com"
}

newObj.greeting = function(){
    console.log("HI! , How are you ?");
}

newObj.greeting2 = function(){
    console.log(`HI! , How are you ?, ${this.username}`);
}

newObj.greeting(); // HI! , How are you ?
newObj.greeting2(); // HI! , How are you ?, xyz