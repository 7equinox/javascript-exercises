const add = function(intNum1, intNum2) {
	return intNum1 + intNum2;
};

const subtract = function(intNum1, intNum2) {
	return intNum1 - intNum2;
};

const sum = function(arrIntNum) {
	return arrIntNum.reduce((intSum, intCurVal) => intSum + intCurVal, 0);
};

const multiply = function(arrIntNum) {
	return arrIntNum.reduce((intProduct, intCurVal) => intProduct * intCurVal, 1);
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
