const D_S = ["tanjiro", "inouske", "zenitsu"];
const JJ_K = ["gojo", "todo", "sukuna"];

D_S.push(JJ_K); // ["tanjiro" , "inouske" , "zenitsu" , ["gojo" , "todo" , "sukuna"]]

console.log(D_S);
console.log(D_S[3][0]); //gojo

const full_arr = D_S.concat(JJ_K);
console.log(full_arr); // ["tanjiro" , "inouske" , "zentisu" , "gojo" , "todo" , "sukuna"]

// good method for concate two array

const all_char = [...D_S, ...JJ_K];
console.log(all_char); // ["tanjiro" , "inouske" , "zentisu" , "gojo" , "todo" , "sukuna"]

const arr = [1, 2, 3, [4, 5, 6, [4, 6]]];
const real_arr = arr.flat(Infinity);
console.log(real_arr);
/*[
  1, 2, 3, 4,
  5, 6, 4, 6
]*/


console.log(Array.isArray("YASH")); // false 
console.log(Array.from("YASH")) // convert string into array
console.log(Array.from({ name: "yash" })) // output => [] // intersting case for interview

let score1 = 23;
let score2 = 4;
let score3 = 2008;

console.log(Array.of(score1, score2, score3)); // [23 , 4 , 2008];