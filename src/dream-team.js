const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];
  let temp = [];

  if (Array.isArray(members)) {


    members.forEach(element => {
      if (typeof (element) === 'string') {
        temp.push(element.trim().toLocaleUpperCase());
      } else {
        return false;
      }
    });
    temp = temp.sort();
    temp.forEach(element => {

      if ((typeof (element) === 'string') && (element.trim() !== '')) {
        //element.slice(1,element.length-1);
        result += element.trim().slice(0, 1).toLocaleUpperCase();
      } else {
        return false;
      }


    });
    console.log(result);
    return result;
  } else {
    return false;
  }
};