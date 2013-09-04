/*
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

