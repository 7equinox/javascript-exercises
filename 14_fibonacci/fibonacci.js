// Function to get a specific member of the Fibonacci seq
const fibonacci = function(num) {
    
    // Convert str to num if given parameter is string
    if(typeof num !== "number") num = Number(num);
    
    // Best case: if 0 or negative numbers
    if(num < 0) return "OOPS";
    if(num === 0) return 0;

    let intPrevNum = 1;
    let intCurrNum = 1;

    for(let i = 2; i < num; i++)
    {
        const intNewFibo = intPrevNum + intCurrNum;
        intPrevNum = intCurrNum;
        intCurrNum = intNewFibo;
    }

    return intCurrNum;
};

console.log( fibonacci("0") );

// Do not edit below this line
module.exports = fibonacci;
