// Repeats the string a given number of times
const repeatString = function(strText, intTimes) {

    if(intTimes < 0) {
        return "ERROR";
    }

    let strRepeat = "";

    for(let i = 0; i < intTimes; i++) {
        strRepeat += strText;
    }

    return strRepeat;
};

const STR_REPEAT_HEY = repeatString('hey', 3); // returns 'heyheyhey'
console.log(STR_REPEAT_HEY);

// Do not edit below this line
module.exports = repeatString;