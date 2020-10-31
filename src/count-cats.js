const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter =  0;
  let result = [].concat(...matrix);
  for (let i = 0; i <  result.length; i++) {
    if (result[i] === '^^') counter++;
  }

  return counter;
};
