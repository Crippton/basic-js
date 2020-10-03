const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  let temp = [];

  matrix.forEach(element => {
    temp = temp.concat(element);
  });

  temp.forEach(element => {
    if (element === '^^') {
      result += 1;
    }
  });
  return result;
};

