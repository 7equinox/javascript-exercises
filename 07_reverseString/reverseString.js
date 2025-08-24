// Function to return reversed string word
const reverseString = function(strWord) {
    return strWord
        .split('') // split to element arrays
        .reverse() // reverse the elements
        .join(''); // join reversed value to string
};

// Do not edit below this line
module.exports = reverseString;
