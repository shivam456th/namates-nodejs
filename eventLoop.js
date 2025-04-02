// const fs = require("fs");
// const a = 100;

// setImmediate(()=>console.log('setImmediate'));

// fs.readFile("./file.txt", "utf8",()=>{
//     console.log("File Reading CB");
    
// })

// setTimeout(()=>console.log("Timer expired"),0)

// function printA() {
//     console.log("a=", a);
    
// }

// printA();
// console.log("Last line of the file ");

// OutPut⤵:
//a = 100
//Last line of the file
// Timer expired
// setImmediate
// File Reading CB

//! 2.
const fs = require("fs");
const a = 100;
setImmediate(()=>console.log('setImmediate'));

Promise.resolve(()=>console.log("Promise"));

fs.readFile("./file.txt", "utf8",()=>{
    console.log("File Reading CB");
})

setTimeout(()=>console.log("Timer expired"),0)

process.nextTick(()=>console.log("process.nextTick"));

function printA() {
    console.log("a=", a);    
}

printA();
console.log("Last line of the file ");

//100
// File Reading CB
// Promise
// "process.nextTick"
// a = 100
// Last line of the file 
