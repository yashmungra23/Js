// Two types of memory
// 1. stack (primitive)
// 2. heap (non-primitive)

let name = "yash"; //stored in stack
let newname = name; // make change in  copy 
newname = "Myash";

console.log(name); //yash
console.log(newname); //Myash

/*  stack memory 
Used for static memory allocation
Stores function calls and local variables

Very fast access ⚡
Memory is automatically managed
Follows LIFO (Last In First Out)
Limited in size 
*/

let obj = { // original refrence
    name : "yash", //stored in heap
    age : 18
}
let obj2 = obj;
obj2.age = 19;

console.log(obj.age); //19
console.log(obj2.age); //19

/*  heap memory
Used for dynamic memory allocation
Stores objects, arrays, complex data

Slower than stack
Memory is manually (C/C++) or automatically (JS via GC) managed
No fixed order (not LIFO)
Much larger size
 */