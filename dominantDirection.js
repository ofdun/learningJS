const SCRIPTS = require("./scripts");

// ltr = 0; rtl = 1; ttb = 2;
function dominantDirection(string) {
    let array = [];
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        const char = element.codePointAt(0);
        if (characterScript(char))
        {
            array.push(characterScript(char).direction == 'ltr' ? 0 : characterScript(char).direction == 'rtl' ? 1 : 2);
        };
    }
    return count(array)
};

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}
  
function count(array) {
    let zeros = array.filter(n => n == 0).length
    let ones = array.filter(n => n == 1).length
    let twos = array.filter(n => n == 2).length
    if (Math.max(zeros, ones, twos) == zeros) return 'ltr'
    if (Math.max(zeros, ones, twos) == ones) return 'rtl'
    if (Math.max(zeros, ones, twos) == twos) return 'ttb'
};

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

