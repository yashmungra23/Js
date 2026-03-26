// Dates
// Created on 26 march 2026 ; 10:50 PM

let date = new Date();
console.log(typeof date); // object
console.log(date); // 2026-03-26T17:11:46.009Z

//Methods for date functions

console.log(date.toString()); // Thu Mar 26 2026 17:12:42 GMT+0000 (Coordinated Universal Time)

console.log(date.toDateString()); // Thu Mar 26 2026

console.log(date.toISOString()); // 2026-03-26T17:18:24.052Z

console.log(date.toJSON()); // 2026-03-26T17:18:24.052Z

console.log(date.toLocaleDateString()); // 3/26/2026

console.log(date.toLocaleString()); // 3/26/2026, 5:18:24 PM

console.log(date.toLocaleTimeString()); // 5:18:24 PM

console.log(date.toTimeString()); // 17:18:24 GMT+0000 (Coordinated Universal Time)

console.log(date.toUTCString()); // Thu, 26 Mar 2026 17:18:24 GMT

console.log(date.getTimezoneOffset()); // 0

console.log(date.getDate()); // 26

console.log(date.getDay()); // 4

console.log(date.getFullYear()); // 2026

console.log(date.getHours()); // 17

//month starts from 0
let createNewDate = new Date(2026 , 4 , 23);
console.log(createNewDate.toDateString()); //Sat May 23 2026
createNewDate = new Date(2026 , 4 , 23 , 18 , 18);
console.log(createNewDate.toLocaleString()); // 5/23/2026, 6:18:00 PM

let myTimeStamps = Date.now(); 
console.log(myTimeStamps); // 1774546384727 it is seconds in ms

createNewDate.toLocaleString('default',{
    second : '2-digit',
    hour : "2-digit"
}) 
//modify time according to conditions

console.log(createNewDate); //1774546981894 
// 2026-05-23T18:18:00.000