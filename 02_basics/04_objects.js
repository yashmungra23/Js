// objects 

// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "uniqueId";
tinderUser.name = "Yash";
tinderUser.isLoggedin = false;


console.log(tinderUser); // empty object {}

// 

const regularUser = {
    email : "yash@gmail.com",
    fullname : {
        username : {
            firstName : "Yash",
            lastName : "Mungra"
        }
    }
}

console.log(regularUser); // full object
/*
{
  email: 'yash@gmail.com',
  fullname: { username: { firstName: 'Yash', lastName: 'Mungra' } }
}
*/

console.log(regularUser.fullname); 
/*
{ username: { firstName: 'Yash', lastName: 'Mungra' } }
*/

// ? => for condition check if fullName exist or not
console.log(regularUser.fullname?.username?.firstName); //  Yash

console.log(regularUser.fullname?.username?.lastName); //  Mungra

const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};

// declaration of object assign
/*
    const returnTarget = Object.assign(target, source)
*/

const obj3 = Object.assign({},obj1,obj2); 

const obj4 = Object.assign({},obj2,obj1);

console.log(obj3);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/
console.log(obj4);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/

// other method // spread method  

const obj5 = {...obj1 , ...obj2};
console.log(obj5);
/*
{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
*/

// Object of Array

const user = [
    {
        id : 1,
        name : "yash"
    },
    {
        rollNo : 41,
        age : 18
    },
    {
        email : "yash@gmail.com"
    }
]

console.log(user[0].name); // yash

// keys

console.log(Object.keys(regularUser));
// [ 'email', 'fullname' ] // datatype is Array

//values

console.log(Object.values(regularUser));
/*
[
  'yash@gmail.com',
  { username: { firstName: 'Yash', lastName: 'Mungra' } }
]
*/

// entries
console.log(Object.entries(regularUser));
/* 
[
  [ 'email', 'yash@gmail.com' ],
  [ 'fullname', { username: [Object] } ]
]
*/

// property checker

console.log(Object.hasOwnProperty('fullname')); // false