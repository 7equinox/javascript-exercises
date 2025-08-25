const removeFromArray = function(arrGiven, ...removeElement) {
    return arrGiven.filter(element => removeElement.indexOf(element) < 0);
    // or return arrGiven.filter(element => !removeElement.includes(element));
};

const arrGiven = removeFromArray([1, 2, 3, 4], 3);
console.log(arrGiven);

const arrGiven2 = removeFromArray([1, 2, 3, 4], 3, 2);
console.log(arrGiven2);

// Do not edit below this line
module.exports = removeFromArray;
