// function to check if a year is a leap year
const leapYears = function(intYear) {
    const IS_DIVISIBLE_BY_FOUR = (intYear % 4 === 0);
    const IS_DIVISIBLE_BY_HUNDRED = (intYear % 100 === 0);
    const IS_DIVISIBLE_BY_400 = (intYear % 400 === 0);

    return IS_DIVISIBLE_BY_FOUR && (!IS_DIVISIBLE_BY_HUNDRED || IS_DIVISIBLE_BY_400);
};

// Do not edit below this line
module.exports = leapYears;
