/*
 * Kata 1
 *
 * Description:
 * Complete the solution so that it takes the object passed in and generates a human readable string from its key/value pairs.
 *
 * The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
 * 
 * Example:
 * solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
 * */

/* Clunky solution that gets the job done but in not very impressive fashion */
function solution(pairs){
  var results = '';
  for(var key in pairs){
      if(pairs.hasOwnProperty(key)) {
        var obj = pairs[key];
        results += key + ' = ' + obj + ',';
    }
  }
  return results.slice(0, -1);
}

solution({a: 1, b: '2'}) // returns "a = 1,b = 2"


/* Better solutions to the same problem */
function solution(pairs){
  return Object.keys(pairs)
    .map(function(k) { return k + ' = ' + pairs[k] })
    .join(',');
}

function solution(pairs){
  lines = [];
  for(var key in pairs){
    lines.push(key + " = " + pairs[key]);
  }
  
  return lines.join(",");
}


/*
 * Kata 2
 *
 * Description:
 * Complete the function so that it returns the number of seconds that have elapsed between the start and end times given. The start/end times are given as Date instances.
 *
 * */
var startDate = new Date(2013, 08, 01);
var endDate = new Date(2013, 08, 02);

function elapsedSeconds(startDate, endDate){
  return (endDate - startDate) / 1000; 
}

// returns 86400
//
// No better solutions available


/*
 * Kata 3
 *
 * Description:
 * Freeze an object. Prevents new properties from being added to it; prevents existing properties from being removed; 
 * and prevents existing properties, or their enumerability, configurability, or writability, from being changed. 
 * In essence the object is made effectively immutable. The method returns the object being frozen.
 *
 * */

var frozen = Object.freeze(MrFreeze);

/* Test */
Test.expect(true, frozen === Object.freeze(MrFreeze));

