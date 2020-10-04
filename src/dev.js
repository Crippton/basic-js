const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
    if ((typeof (sampleActivity) !== 'string') || (typeof (sampleActivity) === 'undefined')) {
        // console.log(typeof (sampleActivity));
         console.log('false');
        return false;
      } else if (!isNaN(sampleActivity) && (sampleActivity > 0)) {
        let k = Math.LN2 / HALF_LIFE_PERIOD;
        let t = Math.round(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
        if ((t === Infinity) || (t === undefined) || (t < 0) ) {
            console.log('false');
          return false;
        } else {
          //console.log(sampleActivity);
           console.log(t);
          return t;
        }
    
      }
      console.log('false');
      return false;
    }

// dateSample(3);
// dateSample(3.312312);
// dateSample(false);
// dateSample(null);
// dateSample(undefined);
// dateSample([3]);
// dateSample(['3']);
// dateSample({
//     '3.14': '3dec'
// });
// dateSample();
// dateSample('ACTIVITY OVER 9000');
// dateSample('one');
// dateSample('');
// dateSample(' ');
// dateSample(' \n\t\r');
// dateSample('1');
// dateSample('3');
// dateSample('1');
// dateSample('9');
// dateSample('11');


dateSample('9000');
dateSample('15.1');
dateSample('0');
dateSample('-5');
dateSample('-55.8');