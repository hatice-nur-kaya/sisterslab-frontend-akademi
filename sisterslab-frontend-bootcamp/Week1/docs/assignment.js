let a = 2;
let b = 3;
let c = 2;
(a == b) // returns FALSE
(a == c) //returns ? TRUE

typeof "John Doe" // Returns STRING
typeof 3.14 // Returns NUMBER
typeof true // Returns BOOLEN
typeof 234567890123456789012345678901234567890n // Returns BIGINT
typeof undefined // Returns UNDEFINED
typeof null // Returns OBJECT
typeof Symbol('symbol') // Returns SYMBOL

let x = 2;
let y = "2";
(x == y) // Returns TRUE
(x === y) // Returns FALSE

let x = 3;
let y = "3";
x + y // Returns '33'

let x = 24;
let y = "Hello";
x + y // Returns '24Hello'

let name = "Vivek";
let surname = " Bisht";
name + surname // Returns 'Vivek Bisht'

let x = 3;
let y = "3";
x - y //Returns 0

let x = 0;
let y = 23;

if(x) { console.log(x) } //undefined

if(y) { console.log(y) } //23

isNaN("Hello") // Returns TRUE
isNaN(345) // Returns FALSE
isNaN('1') // Returns FALSE
isNaN(true) // Returns FALSE
isNaN(false) // Returns FALSE
isNaN(undefined) // Returns TRUE