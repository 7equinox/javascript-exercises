// Function to check if the string is a palindrome
const palindromes = function (strPhrase) {

    // Filter string without punctuation or word breaks
    const strLwrCsPhrase = strPhrase.toLowerCase();
    const arrPhraseToChar = strLwrCsPhrase.split('');
    console.log(arrPhraseToChar);
    const regexOneChar = /[a-z]|[0-9]/i;
    const arrFilterChar = arrPhraseToChar.filter(char => regexOneChar.test(char));
    const strFilterPhrase = arrFilterChar.join('');

    // Reverse the compared string
    const arrCompareChar = strFilterPhrase.split('');
    const arrCmprRvrseChar = arrCompareChar.reverse();
    const strCmprPhrase = arrCmprRvrseChar.join('');

    return strFilterPhrase === strCmprPhrase;
;};

// console.log( palindromes('Racecar!') );

// Do not edit below this line
module.exports = palindromes;
