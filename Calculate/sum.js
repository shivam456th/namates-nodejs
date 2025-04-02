
// Module protectes their varibales and functions from leaking
function calculateSum(a, b){
    const result = a + b;

    console.log(result);
    
}

module.exports = {calculateSum};