// // require('./xyz')
// const calculateSum  = require('./sum.js') //To import calculateSum from the sum module
// // var name =  "Namate NodeJs";
// var a = 10;
// var b = 20;
// // console.log(name);
// // console.log(a + b);

// // console.log(global);
// calculateSum(a, b)

//!1>
// const calculateSum = require('./sum'); // Importing from sum.js

// var a = 10;
// var b = 20;

// console.log("Sum:", calculateSum(a, b)); // Correct function call

// console.log("Sum Module Executed");

//!2>
// const {calculateSum} = require("./Calculate/sum.js")

//!3>
// const { calculateMultiply } = require("./Calculate");
// const { calculateSum } = require("./Calculate");
const {calculateMultiply, calculateSum} =require('./Calculate/index')

var a = 10;
var b = 20;

calculateSum(a, b)
calculateMultiply(a, b);
console.log("Sum Module Executed");
