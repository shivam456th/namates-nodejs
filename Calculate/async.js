const crypto =  require('node:crypto');
// const fs =  require('fs');
// const https =  require('https');

console.log("Hello world");

var a = 1078698;
var b = 20986;

// crypto.pbkdf2 //Password Base Key Deravtive Function
const derivedKey = crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("Derived key is generated",derivedKey);


// Async Function
const derivedKey2 = crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
    console.log("Key is generated:",err, derivedKey2);
});


// https.get("https://jsonplaceholder.typicode.com/todos/1", (res) => {
//     console.log("Fetched Data Successfully");
    
// });

setTimeout(()=>{
    console.log("SetTimeout called after 5 second ");
    
}, 5000);

//synchronous
// fs.readFile("./file.txt", "utf8")

// //Asynchronous 
// fs.readFile("./file.txt", "utf8", (err, data)=>{
//     console.log("File Data : ", data);
    
// });

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b)

console.log("Multiplication result is : ", c);
