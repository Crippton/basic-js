const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof (sampleActivity) !== 'string') || (typeof (sampleActivity) === 'undefined')) {
    // console.log(typeof (sampleActivity));
    //  console.log('false');
    return false;
  } else if (!isNaN(sampleActivity) && (sampleActivity > 0)) {
    let k = Math.LN2 / HALF_LIFE_PERIOD;
    let t = Math.round(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
    if ((t === Infinity) || (t === undefined) || (t < 0) ) {
        // console.log('false');
      return false;
    } else {
      //console.log(sampleActivity);
      //  console.log(t);
      return t;
    }

  }
  //console.log('false');
  return false;
}