const balance = new Number(400)
const score = 400

console.log(balance)
console.log(score)

console.log(balance.toString().length)

//Ecommerce Hai tw 
console.log(balance.toFixed(1))

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3))

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

// =++++++ Math Library++++++=
console.log(Math)
//Absolute value sometime we need to change the negative to positive -4 will be 4 but postive will be positive
console.log(Math.abs(-4))

console.log(Math.round(4.6))
// to control upper and lower 
console.log(Math.ceil(4.2));
console.log(Math.ceil(4.9))

console.log(Math.square())

//Most uses of math
console.log(Math.random()) // 0 to 1
console.log((Math.random()*10)+1);
console.log(floor(Math.random()*10)+1) // 1 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))  + min) 