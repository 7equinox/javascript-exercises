// function of the sum of every integer between them, inclusively
const sumAll = function(intFirstNum, intSecondNum) {

    // two numbers must be positive
    const IS_POS_NUM = intFirstNum > 0 &&
                        intSecondNum > 0;

    // two numbers must be integer
    const IS_INT_NUM = Number.isInteger(intFirstNum) &&
                        Number.isInteger(intSecondNum);

    if(!IS_POS_NUM ||
        !IS_INT_NUM) {
        return "ERROR";
    }

    // count the number of terms
    const INT_NUM_OF_TERMS = Math.abs(intSecondNum - intFirstNum) + 1;

    // sum of an arithmetic seq
    return INT_NUM_OF_TERMS / 2 * (intFirstNum + intSecondNum);
};

// Do not edit below this line
module.exports = sumAll;
