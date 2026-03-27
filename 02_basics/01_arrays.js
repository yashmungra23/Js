//array

const myArr = [1,2,55,5,6]

console.log(myArr);

console.log(myArr.length()); //5

myArr.push(23)
myArr.push(4)
myArr.pop()

console.log(myArr);

const myArr2 = [4,6,5,7,6];

myArr2.unshift(23)
myArr2.unshift(4)
myArr2.shift()

console.log(myArr2);

console.log(myArr.includes(5)); // may be true or false
console.log(myArr.indexOf(5)); // if element is not exist the return value is -1

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // string

//========== slice and splice operation ===========

console.log("========== slice and splice ============");

console.log("A : " , myArr);

//slice
const mynew1 = myArr.slice();
console.log(mynew1);
console.log("B : " , myArr);

//splice
const mynew2 = myArr.splice();
console.log(mynew2);
console.log("C : " , myArr);