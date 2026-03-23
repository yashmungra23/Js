"use strict"//treat all JS code as newer version
 
// JavaScript is a dynamically typed lenguage

/* 
    1. premitive datatypes
        7 types : Number , string , Bool , null , undefined , symbol , bigint
    
    2. reference (non primitive)
        array , function , objects
*/

let name = "yash" //string
let age = 18 //int // you can use "bigint" for big integers
let bigNumber = 232454n //type is bigint
let isLoggedin  = true //bool type
// null => standalone value
// undefined => 
// symbol => for uniqueness

let str = Symbol('23');
let str2 = Symbol('23');

console.log(str == str2); //false

//object

console.log(typeof null);
console.log(typeof undefined);

/*
    1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

    2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/