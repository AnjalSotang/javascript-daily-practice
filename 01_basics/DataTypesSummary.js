// tYPES pRIMITIVE AND non primitive data types
// How the data is kept in the memory and is acessed determines the type of the data.

// Primitive (Call by value: original or reference is not given its copy is given so update are also done in copy )
// 7 types: String, Number, Boolean, Null (Empty), undefined, Symbol,
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const userId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 232435132456n;

// JS is dynamicly type language.

// Non Primitive or Reference
// Arrays, Object, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let obj = {
    name: "hitesh",
    age: 22,
}

//Declaring function in variable
const myFunction = function(){
    console.log("Hello Hero")
}

console.log(typeof myFuntion)
// it gives object function so basically non primitive all are function datatypes when typeof is used

// typeof data type returns interview


// ++++++++

// Types of mEMORY: 
// sTACK (pRIMITIVE), HEAP (Non-Primitive)

let myYoutubename = "anjalSotang"
